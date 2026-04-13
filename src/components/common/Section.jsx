const Section = ({
  children,
  className = '',
  variant = 'default',
  id,
}) => {
  const variants = {
    default: 'bg-background',
    alt: 'bg-background-alt',
    accent: 'bg-accent text-white',
    dark: 'bg-text text-background',
  }

  return (
    <section
      id={id}
      className={`
        relative overflow-hidden
        py-[60px]
        md:py-[80px]
        lg:py-[120px]
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </section>
  )
}

export default Section
