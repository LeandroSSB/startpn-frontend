


const List = ({ children, listStyle, margin, padding, width, heigh }) => {


  const listStyles = {
    listStyle, margin, padding, width, heigh
  }

  return (
    <ul style={listStyles}>
      {children}
    </ul>
  )
}

export default List 