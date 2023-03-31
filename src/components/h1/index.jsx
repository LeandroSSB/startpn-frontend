


const H1 = ({ children, borderBottom, textAlign,  opacity, color, width, height, fontSize, margin, padding, fontWeight }) => {

  const h1Style = {
    color, width, height, opacity, fontSize, textAlign, margin, padding, fontWeight, borderBottom
  }

  return ( <h1  style={h1Style}>{children}</h1>)
}

export default H1