import { useState } from "react"
import { Button, Div, H1, OptionsList } from "../../components";
import { editorStyle, buttonStyle, h1Style, editorOptionsStyle, editorTextStyle, activeStyle, iconStyle } from "./styles";
import { boldIcon, italicIcon, strikethroughIcon, underlineIcon } from "../../images";
import 'react-quill/dist/quill.snow.css';
import ReactQuill, { Quill } from 'react-quill';

const CreateCard = () => {
  const [value, setValue] = useState('');

  console.log(value)


  const modules = {
    toolbar: [
      [{ 'font': [] }],
      [{ 'header': [1, 2, 3, 4, 5, false] }],
      ['bold', 'italic', 'underline','strike', ],
      [{ 'color': [] }, { 'background': [] }],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      [{ 'script': 'sub'}, { 'script': 'super' }],
      ['link', 'image'],
    ],

  }

  
  
  return (
    <>
      <H1 {...h1Style} > Criar card </H1>
      
      <ReactQuill   modules={modules} placeholder="Escreva aqui..." theme="snow" value={value} onChange={setValue}/>
       
      <Button {...buttonStyle}> Criar </Button>
    </>
  )
}

export default CreateCard