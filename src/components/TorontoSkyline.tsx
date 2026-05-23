"use client"

import { memo, useLayoutEffect, useRef } from "react"

const CHARS = " .,:;i1tfLCG08@"
const ASCII_OPACITY = 0.35
const DESKTOP_TOWER_FOCUS_X = 0.68
const DESKTOP_TOWER_VIEWPORT_X = 0.72
const DESKTOP_TOWER_FOCUS_Y = 0.5
const DESKTOP_TOWER_VIEWPORT_Y = 0.5
const MOBILE_TOWER_FOCUS_X = 0.77
const MOBILE_TOWER_VIEWPORT_X = 0.7
const MOBILE_TOWER_FOCUS_Y = 0.5
const MOBILE_TOWER_VIEWPORT_Y = 0.5
const MOBILE_CROP_ZOOM = 1.35

type TorontoSkylineProps = {
  imageSrc?: string
  onReady?: () => void
}

type ImagePixels = {
  data: Uint8ClampedArray
  width: number
  height: number
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(value, max))
}

function getFontSize(width: number, isMobile: boolean) {
  if (isMobile) return 4
  if (width >= 1600) return 6
  if (width >= 1200) return 7
  return 8
}

function isMobileViewport(width: number, height: number) {
  return (
    width <= 640 ||
    (height > width && window.matchMedia("(pointer: coarse)").matches)
  )
}

function sizeCanvas(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
  const ratio = window.devicePixelRatio || 1
  const rect = canvas.getBoundingClientRect()
  const width = rect.width
  const height = rect.height

  canvas.width = Math.ceil(width * ratio)
  canvas.height = Math.ceil(height * ratio)
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
  ctx.imageSmoothingEnabled = false

  return { width, height }
}

function getMetrics(ctx: CanvasRenderingContext2D, width: number, height: number) {
  const isMobile = isMobileViewport(width, height)
  const fontSize = getFontSize(width, isMobile)
  const lineHeight = fontSize * (isMobile ? 1.1 : 1.15)

  ctx.font = `400 ${fontSize}px "Geist Mono", "SF Mono", "Fira Code", "Cascadia Code", "Consolas", monospace`
  ctx.textBaseline = "top"

  const charWidth = ctx.measureText("@").width || fontSize * 0.6

  return {
    charWidth,
    lineHeight,
    cols: Math.ceil(width / charWidth) + 4,
    rows: Math.ceil(height / lineHeight) + 2,
  }
}

function getCoverCrop(
  viewportWidth: number,
  viewportHeight: number,
  sourceWidth: number,
  sourceHeight: number,
  focusX: number,
  viewportX: number,
  focusY: number,
  viewportY: number,
  zoom = 1,
) {
  const scale = Math.max(
    viewportWidth / sourceWidth,
    viewportHeight / sourceHeight,
  ) * zoom
  const visibleSourceWidth = viewportWidth / scale
  const visibleSourceHeight = viewportHeight / scale
  const sourceX = sourceWidth * focusX - visibleSourceWidth * viewportX
  const sourceY = sourceHeight * focusY - visibleSourceHeight * viewportY

  return {
    scale,
    sourceX: clamp(sourceX, 0, Math.max(0, sourceWidth - visibleSourceWidth)),
    sourceY: clamp(sourceY, 0, Math.max(0, sourceHeight - visibleSourceHeight)),
  }
}

function drawSkyline(canvas: HTMLCanvasElement, image: ImagePixels) {
  const ctx = canvas.getContext("2d")
  if (!ctx) return

  const { width, height } = sizeCanvas(canvas, ctx)
  const { charWidth, lineHeight, cols, rows } = getMetrics(ctx, width, height)
  const isMobile = isMobileViewport(width, height)
  const crop = getCoverCrop(
    width,
    height,
    image.width,
    image.height,
    isMobile ? MOBILE_TOWER_FOCUS_X : DESKTOP_TOWER_FOCUS_X,
    isMobile ? MOBILE_TOWER_VIEWPORT_X : DESKTOP_TOWER_VIEWPORT_X,
    isMobile ? MOBILE_TOWER_FOCUS_Y : DESKTOP_TOWER_FOCUS_Y,
    isMobile ? MOBILE_TOWER_VIEWPORT_Y : DESKTOP_TOWER_VIEWPORT_Y,
    isMobile ? MOBILE_CROP_ZOOM : 1,
  )

  ctx.clearRect(0, 0, width, height)

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const sourceX = Math.floor(crop.sourceX + (col * charWidth) / crop.scale)
      const sourceY = Math.floor(crop.sourceY + (row * lineHeight) / crop.scale)
      const px = clamp(sourceX, 0, image.width - 1)
      const py = clamp(sourceY, 0, image.height - 1)
      const idx = (py * image.width + px) * 4
      const r = image.data[idx]
      const g = image.data[idx + 1]
      const b = image.data[idx + 2]
      const brightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255
      const ch = CHARS[Math.floor(brightness * (CHARS.length - 1))]

      if (ch === " ") continue

      ctx.fillStyle = `rgba(${r},${g},${b},${ASCII_OPACITY})`
      ctx.fillText(ch, col * charWidth, row * lineHeight)
    }
  }
}

function TorontoSkyline({ imageSrc = "/toronto.webp", onReady }: TorontoSkylineProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imageRef = useRef<ImagePixels | null>(null)
  const onReadyRef = useRef(onReady)
  onReadyRef.current = onReady

  useLayoutEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    let resizeTimer = 0
    let cancelled = false
    let hasDrawn = false

    const markReady = () => {
      if (hasDrawn) return

      hasDrawn = true
      requestAnimationFrame(() => {
        onReadyRef.current?.()
      })
    }

    const redraw = () => {
      window.clearTimeout(resizeTimer)
      resizeTimer = window.setTimeout(() => {
        if (imageRef.current) {
          drawSkyline(canvas, imageRef.current)
        }
      }, 120)
    }

    const observer = new ResizeObserver(redraw)
    observer.observe(canvas)
    window.addEventListener("resize", redraw)

    const img = new Image()
    img.decoding = "async"
    img.fetchPriority = "high"
    img.src = imageSrc

    img.onload = () => {
      if (cancelled) return

      const source = document.createElement("canvas")
      source.width = img.naturalWidth
      source.height = img.naturalHeight
      const ctx = source.getContext("2d")
      if (!ctx) return

      ctx.drawImage(img, 0, 0)
      const imgData = ctx.getImageData(0, 0, source.width, source.height)
      imageRef.current = {
        data: imgData.data,
        width: source.width,
        height: source.height,
      }

      drawSkyline(canvas, imageRef.current)
      markReady()
    }

    img.onerror = () => {
      markReady()
    }

    return () => {
      cancelled = true
      window.clearTimeout(resizeTimer)
      observer.disconnect()
      window.removeEventListener("resize", redraw)
    }
  }, [imageSrc])

  return (
    <div className="toronto-skyline" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  )
}

export default memo(TorontoSkyline)
