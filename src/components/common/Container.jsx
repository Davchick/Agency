const Container = ({ children, className = '', as: Component = 'div' }) => {
  return (
    <Component
      className={`
        mx-auto w-full
        max-w-[1200px]
        px-6
        md:px-12
        lg:px-16
        ${className}
      `}
    >
      {children}
    </Component>
  )
}

export default Container
