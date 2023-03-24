

const Form = ({ children, display, alignItems, flexFlow, justifyContent, onSubmit, borderRadius, margin, outline, width, height, background, padding, borderStyle, borderColor, color }) => {

  
  const formStyles = {
    display,
    flexFlow,
    borderRadius,
    margin,
    outline,
    width,
    height,
    background,
    padding,
    borderStyle,
    borderColor,
    justifyContent,
    alignItems,
    color
  }

  return (
    <form onSubmit={onSubmit} style={formStyles}>
      {children}
    </form>
  )
}

export default Form