

const Input = (borderRadius, borderStyle, padding, margin, outline, width, height, background, color) => {

  const styleInput = {
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
    <input style={styleInput}> </input>
  )

}