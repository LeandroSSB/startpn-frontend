import { h1Style, accountStyle, formStyle, InputStyle, buttonStyle, imageIconStyle, inputContainerStyle, accountImageStyle } from "./styles"
import { H1, Div, Input, Label, Button, Form, Span } from "../../components"
import { cameraIcon } from "../../images"
import { useState } from "react"

const Account = () => {
  const [file, setFile] = useState()
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [number, setNumber] = useState("")


  const handleIconFile = (e) => {
    setFile(e.target.files[0])
  }



  const handleSubmit = (e) => {
    e.preventDefault()


  }

return (
  <>
    <H1 {...h1Style} > Minha conta </H1>

    <Div {...accountStyle} >
      <Div>
        <Div {...accountImageStyle} background={``} >
          <Label {...imageIconStyle} htmlFor="file"> <img src={cameraIcon} alt="cameraIcon" /></Label>
          <Input type="file" display="none" id="file" onChange={handleIconFile} accept="image/*"> </Input>
        </Div>
      </Div>
      
      <Form {...formStyle} onSubmit={handleSubmit} >
        <Div {...inputContainerStyle} >
          <Label htmlFor="name" >Nome</Label>
          <Input  defaultValue="" type="text" {...InputStyle} id="name" onChange={(e) => setName(e.target.value)}></Input>

          <Label htmlFor="email" >E-mail</Label>
          <Input  defaultValue="" type="email" {...InputStyle} id="email" onChange={(e) => setEmail(e.target.value)}></Input>
        </Div>

        <Div {...inputContainerStyle} >
          <Label htmlFor="number" >Número</Label>
          <Input  defaultValue="" placeHolder="Seu número de telefone" type="tel" {...InputStyle} id="number" onChange={(e) => setNumber(e.target.value)}></Input>

          <Label htmlFor="password" >Senha</Label>
          <Input  defaultValue="" type="password" {...InputStyle} id="password" onChange={(e) => setPassword(e.target.value)}></Input>
        </Div>

        <Button {...buttonStyle} type="submit" > Salvar </Button>
      </Form>
    </Div>
  </>
)
}

export default Account