


const Div = ({ children, width, height, display, justifyContent, alignItems, flexFlow, color, padding, margin }) => {

  const divStyle = {
    width, height, display, justifyContent, alignItems, flexFlow, color , padding, margin 
  }


  return (
    <div style={divStyle}>
      {children}
    </div>
  )
}

export default Div