import { describe, it, expect } from 'vitest'
import { readFileSync } from 'fs'
import { resolve } from 'path'

const cssPath = resolve(process.cwd(), 'src/styles/index.css')
const css = readFileSync(cssPath, 'utf-8')

describe('styles/index.css content', () => {
  it('contains display: flex in body', () => {
    expect(css).toContain('display: flex')
  })

  it('contains place-items: center in body', () => {
    expect(css).toContain('place-items: center')
  })

  it('contains font-size: 3rem in body', () => {
    // Accept literal occurrence of the required font-size
    expect(css).toContain('font-size: 3rem')
  })
})
