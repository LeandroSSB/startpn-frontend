


const Label = ({children, weight, htmlFor, color, padding, margin, background}) => {


  const labelStyle = {
    color, padding, margin, background, weight
  }

  return (
    <label htmlFor={htmlFor} style={labelStyle}> {children} </label>
  )
}

export default Label