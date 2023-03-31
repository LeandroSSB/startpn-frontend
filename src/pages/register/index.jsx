import { Button, Form, Input, Label, Span, Hyperlink, H1, Div } from "../../components/index"
import { buttonStyle, InputStyle, formStyle, LabelStyle, checkboxStyle, realCheck, hyperlinkStyle, h1Style, termsStyle, logged, hyperLogin, container, divider1, divider2, buttonDiv } from "./styles"
import api from "../../services/api"
import { TwoColumnLayout } from "../../layouts"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Register = () => {
  const [ name, setName ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ pass, setPass ] = useState("")
  const [ confirm, setConfirm ] = useState("")
  const [ checkbox, setCheckbox ] = useState(false)
  const navigate = useNavigate()



  const handleSubmit = (e) => {
    e.preventDefault()

    if(pass != confirm ){

    }

    const values = {
      "name": name,
      "email": email,
      "password": pass
    }

    api.post("/login", values)

    // navigate("dashboard")

    console.log(values, checkbox)
  }

  return (
    <>
      <H1 {...h1Style} > Cadastro </H1>
      <Form onSubmit={handleSubmit} {...formStyle}>
        <Div {...container}>
          <Div {...divider1} >
            <Label  { ...LabelStyle } htmlFor="name" > Nome </Label>
            <Input required id="name"        type="text"     onChange={(e) => setName(e.target.value)}    { ...InputStyle({ name: "Insira seu nome"  }) } />

            <Label  { ...LabelStyle } htmlFor="password" > Senha </Label>
            <Input required id="password"    type="password" onChange={(e) => setPass(e.target.value)}    { ...InputStyle({ name: "Insira uma senha" }) } />
          </Div>

          <Div {...divider2} >
            <Label  { ...LabelStyle } htmlFor="email" > E-mail </Label>
            <Input required id="email"       type="email"    onChange={(e) => setEmail(e.target.value)}   { ...InputStyle({ name: "Insira seu email" }) } />
            
            <Label  { ...LabelStyle } htmlFor="confirmPass" > Confirme sua senha </Label>
            <Input required id="confirmPass" type="password" onChange={(e) => setConfirm(e.target.value)} { ...InputStyle({ name: "Confirma senha"   }) } />
          </Div>
        </Div>

        <H1 {...termsStyle}> Termos de uso e privacidade </H1>
        <Span>
          <Span {...{...realCheck, background: checkbox? "#3434ed" : "#ffffff"}} onClick={() => setCheckbox((check) => !check)} ></Span>
          <Input  readOnly required {...checkboxStyle} type="checkbox" id="checkbox" checked={checkbox} onChange={() => setCheckbox((check) => !check)} ></Input>
          <Label htmlFor="checkbox"> Ao clicar neste botão, eu concordo com os  termos de uso e privacidade da nossa empresa. </Label>
        </Span>
          <Hyperlink {...hyperlinkStyle} href={"#checkbox"}> Termos de uso e Privacidade </Hyperlink>

        <Div {...buttonDiv}>
          <Button { ...buttonStyle } type="submit" > Cadastrar  </Button>
        </Div>

      </Form>
      
      <Span {...logged}> Já tem uma conta? <Hyperlink {...hyperLogin} href="/login"> Login</Hyperlink> </Span>

    </>
  )
}

export default Register 