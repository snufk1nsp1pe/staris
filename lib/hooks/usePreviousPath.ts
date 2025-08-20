"use client"
import { usePathname } from "next/navigation"
import { useEffect, useRef } from "react"

export function usePreviousPath() {
  const pathname = usePathname()
  const prevPath = useRef<string | null>(null)

  useEffect(() => {
    prevPath.current = pathname
  }, [pathname])

  return prevPath.current
}
