import { useState } from "react"
import { Editor, EditorState, convertToRaw, convertFromRaw } from "draft-js"
import 'draft-js/dist/Draft.css';
import { Div, H1, OptionsList } from "../../components";
import { editorStyle , h1Style} from "./styles";


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
    'STRIKETHROUGH': {
      textDecoration: 'line-through',
    },
  }

  const options = [
    { name: "STRIKETHROUGH", icon: "S", style: "STRIKETHROUGH"},
    { name: "BOLD", icon: "B", style: "BOLD" },
    { name: "ITALIC", icon: "I", style: "ITALIC" },
    { name: "UNDERLINE", icon: "U", style: "UNDERLINE" },
  ];

  return (
    <>
      <H1 {...h1Style} > Criar card </H1>
      <Div {...editorStyle} >
        <OptionsList  editorState={editorState} onChange={setEditorState} options={options} />
        <Editor editorState={editorState} onChange={setEditorState} customStyleMap={styleMap} />
      </Div>
    </>
  )
}

export default CreateCard