import { useEffect, useRef } from 'react'

/**
 * Hook to auto-refresh data every N seconds
 * Pauses when tab is not visible (using Page Visibility API)
 */
export function useAutoRefresh(callback, intervalSeconds = 600) {
  const intervalRef = useRef(null)
  const isVisibleRef = useRef(true)

  useEffect(() => {
    // Handle visibility change
    const handleVisibilityChange = () => {
      isVisibleRef.current = !document.hidden
      
      if (isVisibleRef.current && intervalRef.current === null) {
        // Tab became visible, restart interval
        startInterval()
      } else if (!isVisibleRef.current && intervalRef.current !== null) {
        // Tab became hidden, clear interval
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }

    const startInterval = () => {
      intervalRef.current = setInterval(() => {
        if (isVisibleRef.current) {
          callback()
        }
      }, intervalSeconds * 1000)
    }

    // Set up visibility listener
    document.addEventListener('visibilitychange', handleVisibilityChange)

    // Start initial interval if tab is visible
    if (isVisibleRef.current) {
      startInterval()
    }

    // Cleanup
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current)
      }
    }
  }, [callback, intervalSeconds])
}

