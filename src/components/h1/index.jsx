


const H1 = ({ children, opacity, color, width, height, fontSize, margin, padding, fontWeight }) => {

  const h1Style = {
    color, width, height, opacity, fontSize, margin, padding, fontWeight
  }

  return ( <h1  style={h1Style}>{children}</h1>)
}

export default H1