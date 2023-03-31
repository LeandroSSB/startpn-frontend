

const Input = ({ borderRadius,ref,  type,defaultValue, visibility, display, borderStyle, checked, readOnly, required, id, borderColor, onChange, padding, margin, outline, width, height, accept, background, color, placeHolder }) => {

  const styleInput = {
    borderRadius,
    display,
    margin,
    outline,
    width,
    height,
    background,
    padding,
    borderStyle,
    borderColor,
    color,
    visibility
  }
  return (
    <input style={styleInput} defaultValue={defaultValue} placeholder={placeHolder} onChange={onChange} type={type} required={required} id={id} checked={checked} readOnly={readOnly} ref={ref} accept={accept}/>
  )

}

export default Input