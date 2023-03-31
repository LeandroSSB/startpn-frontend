import { h1Style, accountStyle, formStyle, InputStyle, buttonStyle, inputContainerStyle } from "./styles"
import { H1, Div, Input, Label, Button, Form } from "../../components"
import { cameraIcon } from "../../images"

const Account = () => {


  const handleIconFile = (e) => {
    // latter we will use this 
    console.log(e.target.files[0])
  }

return (
  <>
    <H1 {...h1Style} > Minha conta </H1>

    <Div {...accountStyle} >
      <Div>
        <Label htmlFor="file"> <img src={cameraIcon} alt="cameraIcon" /></Label>
        <Input type="file" display="none" id="file" onChange={handleIconFile}> </Input>

      </Div>
      
      <Form {...formStyle}>
        <Div {...inputContainerStyle} >
          <Label htmlFor="name" >Nome</Label>
          <Input  defaultValue type="text" {...InputStyle} id="name"></Input>

          <Label htmlFor="email" >E-mail</Label>
          <Input  defaultValue type="email" {...InputStyle} id="email"></Input>
        </Div>

        <Div {...inputContainerStyle} >
          <Label htmlFor="number" >Número</Label>
          <Input  defaultValue type="tel" {...InputStyle} id="number"></Input>

          <Label htmlFor="password" >Senha</Label>
          <Input  defaultValue type="password" {...InputStyle} id="password"></Input>
        </Div>

        <Button {...buttonStyle} type="submit" > Salvar </Button>
      </Form>
    </Div>
  </>
)
}

export default Account