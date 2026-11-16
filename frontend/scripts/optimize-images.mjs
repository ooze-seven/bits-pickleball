// Converts the source images in assets-src/ into the web-ready files in src/assets/.
// Run with `npm run images` after adding or replacing a source image.
import { mkdir, readdir, stat } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const src = (...p) => path.join(root, 'assets-src', ...p)
const out = (...p) => path.join(root, 'src', 'assets', ...p)

const kb = (bytes) => `${(bytes / 1024).toFixed(0)} KB`

async function report(from, to) {
  const [a, b] = await Promise.all([stat(from), stat(to)])
  const { width, height } = await sharp(to).metadata()
  console.log(
    `${path.relative(root, to).padEnd(44)} ${String(width).padStart(4)}x${String(height).padEnd(5)} ${kb(a.size).padStart(7)} -> ${kb(b.size)}`,
  )
}

/**
 * Finds the first column of the wordmark's lettering: the end of the first
 * empty gap after the mark, which is the widest gap in the image.
 */
async function lettering_start(file) {
  const { data, info } = await sharp(file)
    .ensureAlpha()
    .extractChannel(3)
    .raw()
    .toBuffer({ resolveWithObject: true })
  const { width, height } = info
  const inked = (x) => {
    for (let y = 0; y < height; y++) if (data[y * width + x] > 16) return true
    return false
  }
  let best = { start: 0, length: 0 }
  let gapStart = -1
  let seenInk = false
  for (let x = 0; x < width; x++) {
    if (inked(x)) {
      if (seenInk && gapStart >= 0 && x - gapStart > best.length) {
        best = { start: gapStart, length: x - gapStart }
      }
      seenInk = true
      gapStart = -1
    } else if (seenInk && gapStart < 0) {
      gapStart = x
    }
  }
  if (!best.length) throw new Error(`No gap between mark and lettering in ${file}`)
  return best.start + best.length
}

async function photos() {
  await mkdir(out('images'), { recursive: true })
  const files = (await readdir(src('images'))).filter((f) => /\.(jpe?g|png)$/i.test(f))
  for (const file of files) {
    const from = src('images', file)
    const to = out('images', file.replace(/\.\w+$/, '.webp'))
    // Photos are at most 1280px wide, so they keep their size; only the encoding changes.
    await sharp(from).rotate().webp({ quality: 78, effort: 6 }).toFile(to)
    await report(from, to)
  }
}

async function brand() {
  await mkdir(out('brand'), { recursive: true })

  // The mark shows at most ~102px tall (loader); 320px covers 3x screens.
  await sharp(src('brand', 'mark-transparent.png'))
    .resize({ height: 320 })
    .webp({ quality: 90, alphaQuality: 100, effort: 6 })
    .toFile(out('brand', 'mark.webp'))
  await report(src('brand', 'mark-transparent.png'), out('brand', 'mark.webp'))

  // The wordmark shows up to ~500px wide (home hero), so the full 856px source covers 2x.
  await sharp(src('brand', 'wordmark-transparent.png'))
    .webp({ quality: 90, alphaQuality: 100, effort: 6 })
    .toFile(out('brand', 'wordmark.webp'))
  await report(src('brand', 'wordmark-transparent.png'), out('brand', 'wordmark.webp'))

  // Lettering only (the wordmark minus its leading mark), for the loading
  // screen, which already shows the big mark above it. Keeps the wordmark's
  // full height so the lettering sits with the same spacing as before.
  const wordmarkSrc = src('brand', 'wordmark-transparent.png')
  const textLeft = await lettering_start(wordmarkSrc)
  const { width: wmWidth, height: wmHeight } = await sharp(wordmarkSrc).metadata()
  await sharp(wordmarkSrc)
    .extract({ left: textLeft, top: 0, width: wmWidth - textLeft, height: wmHeight })
    .webp({ quality: 90, alphaQuality: 100, effort: 6 })
    .toFile(out('brand', 'wordmark-text.webp'))
  await report(wordmarkSrc, out('brand', 'wordmark-text.webp'))

  // Favicon: the mark centred on a transparent 64x64 square.
  await sharp(src('brand', 'mark-transparent.png'))
    .resize(64, 64, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9, palette: true })
    .toFile(out('brand', 'favicon.png'))
  await report(src('brand', 'mark-transparent.png'), out('brand', 'favicon.png'))
}

await photos()
await brand()
