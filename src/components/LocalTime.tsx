"use client"

import { useEffect, useState } from "react"

export default function LocalTime() {
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    const updateTime = () => setNow(new Date())
    updateTime()
    const interval = window.setInterval(updateTime, 30_000)
    return () => window.clearInterval(interval)
  }, [])

  const time = now
    ? new Intl.DateTimeFormat("en-GB", {
        timeZone: "America/Toronto",
        hour: "2-digit",
        minute: "2-digit",
      }).format(now)
    : "--:--"

  return (
    <div className="local-time">
      <span>Toronto</span>
      <time dateTime={now?.toISOString()}>
        <span className="sr-only">Local time in Toronto: </span>
        {time}
      </time>
    </div>
  )
}
