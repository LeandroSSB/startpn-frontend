import { useState } from "react"
import { Button, Div, H1, Input, Select } from "../../components";
import { editorStyle, buttonStyle, h1Style, editorOptionsStyle, editorTextStyle, activeStyle, iconStyle } from "./styles";
import { boldIcon, italicIcon, strikethroughIcon, underlineIcon } from "../../images";
import 'react-quill/dist/quill.snow.css';
import ReactQuill, { Quill } from 'react-quill';
import { useCards } from "../../context/cards";
import { useCategories } from "../../context/categories";

const CreateCard = () => {
  const [editor, setEditor] = useState('');
  const { categories } = useCategories()


  const Font = Quill.import("formats/font")
  Font.whitelist = [ 'Poppins',"sans-serif",]
  Quill.register(Font, true)
  


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

  }

  return (
    <>
      <H1 {...h1Style} > Criar card </H1>
      
      <Div> 
        <Input type="text" ></Input>
        <Select>
          {categories}  
        </Select> 
      </Div>

      <ReactQuill formats={formats} style={editorStyle} modules={modules} placeholder="Escreva aqui..." theme="snow" value={editor} onChange={setEditor}/>
       
      <Button {...buttonStyle} onClick={handleCard}> Criar </Button>
    </>
  )
}

export default CreateCard