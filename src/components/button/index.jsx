


const Button = ({ borderRadius, borderStyle, padding, margin, type, outline, width, height, background, color, children, onClick }) => {

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
    <button style={styleButton} onClick={onClick} type={type}>
      { children }
    </button>
  )
}

export default Button