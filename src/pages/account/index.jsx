import { h1Style, accountStyle, formStyle, InputStyle, buttonStyle, imageIconStyle, inputContainerStyle, accountImageStyle } from "./styles"
import { H1, Div, Input, Label, Button, Form, Span } from "../../components"
import { cameraIcon } from "../../images"
import { useState } from "react"
import { useUser } from "../../context/user"

const Account = () => {
  const { user, updateUser } = useUser()
  const [file, setFile] = useState(user.accountImage || "")
  const [email, setEmail] = useState(user.email)
  const [name, setName] = useState(user.name)
  const [password, setPassword] = useState("")
  const [number, setNumber] = useState(user.phoneNumber || "")


  const handleIconFile = (e) => {
    setFile(e.target.files[0])
  }

  console.log(file)

  const handleSubmit = (e) => {
    e.preventDefault()
    updateUser({name: name, phoneNumber: number, email: email, accountImage: file  })

  }

return (
  <>
    <H1 {...h1Style} > Minha conta </H1>

    <Div {...accountStyle} >
      <Div>
        <Div {...accountImageStyle} background={`url(${file? URL.createObjectURL(file) : ""})`} >
          <Label {...imageIconStyle} htmlFor="file"> <img src={cameraIcon} alt="cameraIcon" /></Label>
          <Input type="file" display="none" id="file" onChange={handleIconFile} accept="image/*"> </Input>
        </Div>
      </Div>
      
      <Form {...formStyle} onSubmit={handleSubmit} >
        <Div {...inputContainerStyle} >
          <Label htmlFor="name" >Nome</Label>
          <Input  defaultValue={name} type="text" {...InputStyle} id="name" onChange={(e) => setName(e.target.value)}></Input>

          <Label htmlFor="email" >E-mail</Label>
          <Input  defaultValue={email} type="email" {...InputStyle} id="email" onChange={(e) => setEmail(e.target.value)}></Input>
        </Div>

        <Div {...inputContainerStyle} >
          <Label htmlFor="number" >Número</Label>
          <Input  defaultValue={number} placeHolder="Seu número de telefone" type="tel" {...InputStyle} id="number" onChange={(e) => setNumber(e.target.value)}></Input>

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