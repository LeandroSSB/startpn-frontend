


const Item = ({ children, onClick, width, height, display, flexFlow, color, fontSize, fontWeight, cursor }) =>{

  const liStyle = {
    width, height, display, flexFlow, color, fontSize, fontWeight, cursor
  }

  return (
    <li  style={liStyle} onClick={onClick}> {children} </li>
  )
}

export default Item