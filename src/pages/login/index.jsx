import { useState } from "react"
import api from "../../services/api"
import { Button, Form, H1, Hyperlink, Input, Label, Span } from "./../../components"
import { TwoColumnLayout } from "./../../layouts"
import { InputStyle, LabelStyle, formStyle, buttonStyle, hyperlinkStyle, spanStyle } from "./styles"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault()
    // api.post("/login", {})
    console.log(email, password)
  }

  return (
    <>
      <H1> Dados de acesso </H1>
      <Form onSubmit={handleSubmit} {...formStyle}>
        <Label  {...LabelStyle} htmlFor="email">E-mail</Label>
        <Input required {...InputStyle("Insira seu e-mail")} id="email" type="email" onChange={(e) => setEmail(e.target.value)}></Input>

        <Label {...LabelStyle} htmlFor="password" >Senha</Label>
        <Input required {...InputStyle("Insira sua senha")} id="password" type="password" onChange={(e) => setPassword(e.target.value)}></Input>

        <Span {...spanStyle}>
          <Button {...buttonStyle} type="submit" > Entrar </Button>
          <Hyperlink {...hyperlinkStyle} href="#forgotPass"> Esqueceu a senha? </Hyperlink>
        </Span>
      </Form>
    </>
  )
}

export default Login