

const Select = ({ children, borderRadius, defaultValue, onChange, display, margin, outline, width, height, background, padding, borderStyle, borderColor, color, visibility }) => {

  const styles = {
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
    <select defaultValue={defaultValue}  style={styles} onChange={onChange}>
      <option disabled value=""></option>
      {children.map(option => ( <option key={option} value={option}> {option} </option>))}
    </select>
  )
}

export default Select