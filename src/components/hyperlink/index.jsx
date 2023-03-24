

const Hyperlink = ({ children, href ,width, heigth, fontWeight, textAlign, fontSize, padding, margin, display, color, textDecoration  }) => {


  const aStyles = {
    width, heigth, fontWeight, textAlign, fontSize, padding, margin, display, color, textDecoration
  }

  return (
    <a href={href} style={aStyles}> {children} </a>
  )
}


export default Hyperlink