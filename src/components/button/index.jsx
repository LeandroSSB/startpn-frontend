


const Button = ({ borderRadius, position,cursor, left, up, right, bottom, border, borderStyle,fontWeight, fontSize, padding, margin, type, outline, width, height, background, color, children, onClick }) => {

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
    cursor,
    left,
    up,
  }

  return (
    <button style={styleButton} onClick={onClick} type={type}>
      { children }
    </button>
  )
}

export default Button