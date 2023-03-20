


const Button = ({ borderRadius, borderStyle, padding, margin, outline, width, height, background, color, children, onClick }) => {

  const styleButton = {
    borderRadius,
    margin,
    outline,
    width,
    height,
    background,
    padding,
    borderStyle,
    color
  }

  return (
    <button style={styleButton} onClick={onClick}>
      { children }
    </button>
  )
}

export default Button