import { useState } from "react"
import { Editor, EditorState, convertToRaw, convertFromRaw } from "draft-js"
import 'draft-js/dist/Draft.css';
import { Div, H1, OptionsList } from "../../components";
import { editorStyle, h1Style, editorOptionsStyle, editorTextStyle } from "./styles";


const CreateCard = () => {
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  )
  // save current data
  // console.log(JSON.stringify(convertToRaw(editorState.getCurrentContent())))

  // save previus data
  // const storedState = convertFromRaw(JSON.parse(editorJSON));
  
  const styleMap = {
    BOLD: {
      fontWeight: "bold",
    },
    ITALIC: {
      fontStyle: "italic",
    },
    UNDERLINE: {
      textDecoration: "underline",
    },
  }

  const options = [
    { name: "BOLD", icon: "B", style: "BOLD" },
    { name: "ITALIC", icon: "I", style: "ITALIC" },
    { name: "UNDERLINE", icon: "U", style: "UNDERLINE" },
  ];

  return (
    <>
      <H1 {...h1Style} > Criar card </H1>
      <Div {...editorStyle} >
        <OptionsList {...editorOptionsStyle} editorState={editorState} onChange={setEditorState} options={options} />
        <Div {...editorTextStyle}>
          <Editor placeholder="Escreva algo..." editorState={editorState} onChange={setEditorState} customStyleMap={styleMap} />
        </Div>
      </Div>
    </>
  )
}

export default CreateCard