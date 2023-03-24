


const Span = ({ children, onClick, borderRadius,  display, position, top, width, height, margin, verticalAlign, background, border, cursor }) => {

  const spanStyles = {
    borderRadius, display, position, top, width, height, margin, verticalAlign, background, border, cursor
  }


  return (
    <span style={spanStyles} onClick={onClick}> {children }</span>
  )
}

export default Span