import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Custom hook that scrolls to the top of the page when the route changes.
 * Useful for ensuring users see the top of the page when navigating via footer or other links.
 *
 * Usage:
 * - Call this hook in your main App component or at the routing level
 * - It automatically watches for location changes and scrolls to top
 * - For smooth scrolling, pass smooth: true to the hook
 *
 * @param smooth - If true, uses smooth scroll behavior instead of instant scroll
 * @param delay - Delay in milliseconds before scrolling (useful for lazy-loaded content)
 */
export function useScrollToTop(smooth = false, delay = 0) {
  const { pathname } = useLocation()

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: smooth ? 'smooth' : 'auto'
      })

      // Restore focus to body for accessibility
      document.body.focus()
    }

    if (delay > 0) {
      const timer = setTimeout(scrollToTop, delay)
      return () => clearTimeout(timer)
    } else {
      scrollToTop()
    }
  }, [pathname, smooth, delay])
}
