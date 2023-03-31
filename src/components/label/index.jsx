


const Label = ({children, weight, cursor, margin, htmlFor, color, padding,  background, borderRadius, display, outline, width, height,  borderStyle, borderColor,  visibility}) => {


  const labelStyle = {
    color, padding, margin, background, cursor, weight,borderRadius, display,  outline, width, height,   borderStyle, borderColor,  visibility
  }

  return (
    <label htmlFor={htmlFor} style={labelStyle}> {children} </label>
  )
}

export default Label