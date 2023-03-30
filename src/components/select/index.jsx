

const Select = ({ children, borderRadius, display, margin, outline, width, height, background, padding, borderStyle, borderColor, color, visibility }) => {

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
    <select style={styles}>
      {children.map(option => ( <option key={option} value={option}> {option} </option>))}
    </select>
  )
}

export default Select