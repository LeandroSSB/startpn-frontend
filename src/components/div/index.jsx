


const Div = ({ children, width,borderRadius, height, display, justifyContent, alignItems,overflow, flexFlow, color, padding,border, margin }) => {

  const divStyle = {
    width, height, display, justifyContent, alignItems, flexFlow, color , padding, margin, border, overflow,borderRadius
  }


  return (
    <div style={divStyle}>
      {children}
    </div>
  )
}

export default Div