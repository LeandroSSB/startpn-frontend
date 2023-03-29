import { RichUtils } from "draft-js"
import 'draft-js/dist/Draft.css'


const OptionsList = ({ editorState, onChange, options }) => {

  const handleClick = ( e, style ) => {
    e.preventDefault()
    onChange(RichUtils.toggleInlineStyle(editorState, style))
  }

  return (
    <div>
      {options.map((option) => (
        <button key={option.name} onMouseDown={(e) => handleClick(e, option.style)} className={editorState.getCurrentInlineStyle().has(option.style)? "active" : ""} >
          {option.icon}
        </button>
      ))}
    </div>
  )

}

export default OptionsList