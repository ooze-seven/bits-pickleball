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

  // Favicon: the mark centred on a transparent 64x64 square.
  await sharp(src('brand', 'mark-transparent.png'))
    .resize(64, 64, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9, palette: true })
    .toFile(out('brand', 'favicon.png'))
  await report(src('brand', 'mark-transparent.png'), out('brand', 'favicon.png'))
}

await photos()
await brand()
