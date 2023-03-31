import { useState } from "react"
import { Button, Div, H1, Input, Label, Select, Span } from "../../components";
import { editorStyle, buttonStyle, h1Style, editorOptionsStyle, editorTextStyle, activeStyle, selectStyle, inputsContainer, InputStyle, LabelStyle, inputDivStyle } from "./styles";
import { boldIcon, italicIcon, strikethroughIcon, underlineIcon } from "../../images";
import 'react-quill/dist/quill.snow.css';
import ReactQuill, { Quill } from 'react-quill';
import { useCards } from "../../context/cards";
import { useCategories } from "../../context/categories";
import { useNavigate } from "react-router-dom";

const CreateCard = () => {
  const [ editor, setEditor ] = useState('');
  const [ inputValue, setInputValue ] = useState("")
  const [ choice, setChoice ] = useState("")
  const { categories } = useCategories()
  const { createCard } = useCards()

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
  

  const handleCard = () => {
    if(!inputValue || inputValue.length < 3) {
      return alert("Please create a name greater than 3 characters")
    }
    if(!choice) {
      return alert("Please enter a category")
    }

    createCard({
      name: inputValue,
      category: choice,
      content: editor
    })
    navigate("/dashboard/playbooks")
  }

  return (
    <>
      <H1 {...h1Style} > Criar card </H1>
      
      <Div {...inputsContainer}> 
        <Div {...inputDivStyle}>
          <Label {...LabelStyle} > Nome </Label>
          <Input type="text" {...InputStyle}  placeHolder="Insira um nome" onChange={(e) => setInputValue(e.target.value)}></Input>
        </Div>
        <Div {...inputDivStyle}>
          <Label {...LabelStyle} > Categoria </Label>
          <Select {...selectStyle} defaultValue="" onChange={(e) => setChoice(e.target.value)}>
            {categories}  
          </Select> 
        </Div>
      </Div>

      <ReactQuill formats={formats} style={editorStyle} modules={modules} placeholder="Escreva aqui..." theme="snow" value={editor} onChange={setEditor}/>
       
      <Button {...buttonStyle} onClick={handleCard}> Criar </Button>
    </>
  )
}

export default CreateCard