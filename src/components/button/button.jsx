


const Button = ({name, }) => {

  const styles = {
    borderRadius: '60px',
    backgroundColor: '#476EE6',
    borderStyle: 'none',
    padding: '.5rem 50px',
    color: "white"
  }


  return (
    <button style={styles}>
      {name}
    </button>
  )
}

export default Button