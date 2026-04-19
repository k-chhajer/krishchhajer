"use client"

import { useEffect, useRef, useCallback } from "react"

// ASCII characters from lightest to densest
const CHARS = " .,:;i1tfLCG08@"

export default function TorontoSkyline() {
  const preRef = useRef<HTMLPreElement>(null)
  const animRef = useRef<number>(0)
  const timeRef = useRef<number>(0)
  const imageDataRef = useRef<{
    data: Uint8ClampedArray
    width: number
    height: number
  } | null>(null)

  // Load the image once into an offscreen canvas
  useEffect(() => {
    const img = new Image()
    img.crossOrigin = "anonymous"
    img.src = "/toronto.webp"

    img.onload = () => {
      const canvas = document.createElement("canvas")
      canvas.width = img.naturalWidth
      canvas.height = img.naturalHeight
      const ctx = canvas.getContext("2d")
      if (!ctx) return

      ctx.drawImage(img, 0, 0)
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)

      imageDataRef.current = {
        data: imgData.data,
        width: canvas.width,
        height: canvas.height,
      }
    }
  }, [])

  const render = useCallback(() => {
    const pre = preRef.current
    if (!pre) {
      animRef.current = requestAnimationFrame(render)
      return
    }

    const imgInfo = imageDataRef.current
    if (!imgInfo) {
      animRef.current = requestAnimationFrame(render)
      return
    }

    // Use window dimensions for full coverage
    const w = window.innerWidth
    const h = window.innerHeight

    // Measure character size from computed style
    const style = window.getComputedStyle(pre)
    const fontSize = parseFloat(style.fontSize) || 8
    const lineHeight = parseFloat(style.lineHeight) || fontSize * 1.15
    const charW = fontSize * 0.6
    const charH = lineHeight

    const cols = Math.ceil(w / charW) + 2
    const rows = Math.ceil(h / charH) + 2

    if (cols <= 0 || rows <= 0) {
      animRef.current = requestAnimationFrame(render)
      return
    }

    // Very slow time for subtle shimmer
    timeRef.current += 0.003

    const parts: string[] = []

    for (let row = 0; row < rows; row++) {
      // Group consecutive characters with the same color for performance
      let lineHtml = ""
      let currentColor = ""
      let currentChars = ""

      for (let col = 0; col < cols; col++) {
        // Map grid position to image pixel
        const imgX = Math.floor((col / cols) * imgInfo.width)
        const imgY = Math.floor((row / rows) * imgInfo.height)

        const px = Math.min(imgX, imgInfo.width - 1)
        const py = Math.min(imgY, imgInfo.height - 1)

        const idx = (py * imgInfo.width + px) * 4
        const r = imgInfo.data[idx]
        const g = imgInfo.data[idx + 1]
        const b = imgInfo.data[idx + 2]

        // Luminance for character selection
        const brightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255

        // Subtle shimmer
        const shimmer =
          Math.sin(col * 0.15 + row * 0.1 + timeRef.current * 2) * 0.02 +
          Math.sin(col * 0.08 - row * 0.12 + timeRef.current * 1.3) * 0.015

        const adjusted = Math.max(0, Math.min(1, brightness + shimmer))
        const charIndex = Math.floor(adjusted * (CHARS.length - 1))
        const ch = CHARS[charIndex]

        // Color with reduced opacity for subtlety
        const opacity = 0.35
        const color = `rgba(${r},${g},${b},${opacity})`

        if (color === currentColor) {
          currentChars += ch
        } else {
          // Flush previous span
          if (currentChars.length > 0) {
            if (currentChars.trim().length === 0) {
              lineHtml += currentChars // spaces don't need a span
            } else {
              lineHtml += `<span style="color:${currentColor}">${currentChars}</span>`
            }
          }
          currentColor = color
          currentChars = ch
        }
      }

      // Flush remaining
      if (currentChars.length > 0) {
        if (currentChars.trim().length === 0) {
          lineHtml += currentChars
        } else {
          lineHtml += `<span style="color:${currentColor}">${currentChars}</span>`
        }
      }

      parts.push(lineHtml)
    }

    pre.innerHTML = parts.join("\n")
    animRef.current = requestAnimationFrame(render)
  }, [])

  useEffect(() => {
    animRef.current = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animRef.current)
    }
  }, [render])

  return (
    <div className="toronto-skyline" aria-hidden="true">
      <pre ref={preRef} />
    </div>
  )
}
