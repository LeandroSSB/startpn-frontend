


const Span = ({ children, onClick, fontWeight, fontSize, opacity, borderRadius, color, display, position, top, width, height, margin, verticalAlign, background, border, cursor }) => {

  const spanStyles = {
    borderRadius, display, position, fontWeight, fontSize, opacity, top, width, height, margin, verticalAlign, background, border, cursor, color
  }


  return (
    <span style={spanStyles} onClick={onClick}> {children }</span>
  )
}

export default Span