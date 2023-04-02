import { InputStyle, LabelStyle, activeStyle, buttonStyle, editorOptionsStyle, editorStyle, editorTextStyle, h1Style, iconStyle, inputDivStyle, inputsContainer, selectStyle, spanStyle} from "./styles"
import { H1, Div, Label, Select, Button, Input} from "./../../components"
import { useCards } from "../../context/cards"
import { useCategories } from "../../context/categories"
import ReactQuill, {Quill} from "react-quill"
import { useState } from "react"
import {  useLocation, useNavigate } from "react-router-dom"

const EditCard = () => {
  const { categories } = useCategories()
  const {  updateCards } = useCards()
  
  const { state } = useLocation()
  const { card } = state
  
  const [editor, setEditor ] = useState(card.content)
  const [choice, setChoice] = useState(card.category)
  const [inputValue, setInputValue] = useState(card.name)

  const Font = Quill.import("formats/font")
  Font.whitelist = [ 'Poppins',"sans-serif",]
  Quill.register(Font, true)

  const navigate = useNavigate()

  const modules = {
    toolbar: [
      [{ 'font': Font.whitelist }],
      [{ 'header': [1, 2, 3, 4, 5, false] }],
      ['bold', 'italic', 'underline','strike', ],
      [{ 'color': [] }, { 'background': [] }],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      [{ 'script': 'sub'}, { 'script': 'super' }],
      ['link', 'image'],
    ],

  }

  const formats = [
    "header",
    "font",
    "bold",
    "italic",
    "underline",
    "strike",
    "background",
    "script",
    "list",
    "bullet",
    "link",
    "image",
  ];
  
  const handleEditCard  = () => {

    console.log(categories)
    const { id } = categories.find( a => a.name === choice) || { id: card.category}

    updateCards({
      name: card.name,
      newName: inputValue,
      categoryId: id,
      content: editor
    })


  navigate("../playbooks")    
  }



return (
<>
      <H1 {...h1Style} > Editar card </H1>
      
      <Div {...inputsContainer}> 
        <Div {...inputDivStyle}>
          <Label {...LabelStyle} > Nome </Label>
          <Input defaultValue={card.name} type="text" {...InputStyle}  placeHolder="Insira um nome" onChange={(e) => setInputValue(e.target.value)}></Input>
        </Div>
        <Div {...inputDivStyle}>
          <Label {...LabelStyle} > Categoria </Label>
          <Select {...selectStyle} defaultValue={card.category} onChange={(e) => setChoice(e.target.value)}>
            {categories.map(a => a.name)}  
          </Select> 
        </Div>
      </Div>

      <ReactQuill formats={formats} style={editorStyle} modules={modules} placeholder="Escreva aqui..." theme="snow" value={editor} onChange={setEditor}/>
       
      <Button {...buttonStyle} onClick={handleEditCard}> Editar </Button>
    </>
)
  
}


export default EditCard