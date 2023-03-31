


const Div = ({ children, position, background,  left, right, top, bottom, transform, width,borderRadius,overflowY, borderBottom, height, display, justifyContent, alignItems,overflow, flexFlow, color, padding,border, margin }) => {

  const divStyle = {
    width, height, display, background, justifyContent, alignItems, borderBottom, flexFlow, color , padding, margin, border, overflow,borderRadius, overflowY, position, left, right, top, bottom, transform
  }


  return (
    <div style={divStyle}>
      {children}
    </div>
  )
}

export default Div