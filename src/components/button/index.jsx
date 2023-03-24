


const Button = ({ borderRadius, position,cursor, right, bottom, border, borderStyle,fontWeight, fontSize, padding, margin, type, outline, width, height, background, color, children, onClick }) => {

  const styleButton = {
    borderRadius,
    margin,
    position,
    outline,
    width,
    height,
    background,
    padding,
    borderStyle,
    fontWeight,
    color,
    fontSize,
    right,
    bottom,
    border,
    cursor
  }

  return (
    <button style={styleButton} onClick={onClick} type={type}>
      { children }
    </button>
  )
}

export default Button