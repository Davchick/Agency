import { useScrollAnimationOnce } from '../../hooks/useScrollAnimation.js'

/**
 * Wrapper component that applies fade-in animation on scroll
 * Children will fade in when entering the viewport
 */
const FadeIn = ({
  children,
  className = '',
  delay = 0,
  duration = 500,
  direction = 'up', // 'up', 'down', 'left', 'right', 'none'
  once = true,
}) => {
  const { ref, isVisible } = useScrollAnimationOnce({ threshold: 0.1 })

  const getInitialTransform = () => {
    switch (direction) {
      case 'up':
        return 'translateY(30px)'
      case 'down':
        return 'translateY(-30px)'
      case 'left':
        return 'translateX(30px)'
      case 'right':
        return 'translateX(-30px)'
      case 'none':
        return 'none'
      default:
        return 'translateY(30px)'
    }
  }

  const style = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'none' : getInitialTransform(),
    transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
    willChange: 'opacity, transform',
  }

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  )
}

export default FadeIn
