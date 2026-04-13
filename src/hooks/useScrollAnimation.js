import { useEffect, useRef, useState } from 'react'

/**
 * Hook for scroll-triggered animations using Intersection Observer
 * @param {Object} options - Intersection Observer options
 * @param {number} options.threshold - Trigger threshold (0-1)
 * @param {string} options.rootMargin - Margin around root
 * @returns {Object} - { ref, isVisible, hasBeenVisible }
 */
export function useScrollAnimation({
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
} = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasBeenVisible, setHasBeenVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setHasBeenVisible(true)
        } else {
          // Reset when out of view for re-animation
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin])

  return { ref, isVisible, hasBeenVisible }
}

/**
 * Hook that tracks visibility but never resets once visible (one-shot animation)
 * @param {Object} options - Intersection Observer options
 * @returns {Object} - { ref, isVisible }
 */
export function useScrollAnimationOnce({
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
} = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin])

  return { ref, isVisible }
}

export default useScrollAnimation
