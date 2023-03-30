// import { RichUtils } from "draft-js"
// import 'draft-js/dist/Draft.css'


const OptionsList = ({ buttonStyle, activeStyle,  editorState, onChange, options, width, height, display, justifyContent, alignItems, flexFlow, color, borderBottom, padding, margin, border, overflow,borderRadius, overflowY }) => {

  // const styles = {
  //   width, height, display, justifyContent, alignItems, flexFlow, color , padding, margin, border, overflow,borderRadius, overflowY, borderBottom
  // }

  // const handleClick = ( e, style ) => {
  //   e.preventDefault()
  //   onChange(RichUtils.toggleInlineStyle(editorState, style))
  // }

  return (
    <div style={styles}>
      {/* {options.map((option) => (
        <button key={option.name} onMouseDown={(e) => handleClick(e, option.style)} style={editorState.getCurrentInlineStyle().has(option.style)? activeStyle : buttonStyle} >
          <img   src={option.icon} alt={option.name} />
        </button>
      ))} */}
    </div>
  )

}

export default OptionsList