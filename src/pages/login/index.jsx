import { useState } from "react"
import api from "../../services/api"
import { Button, Form, H1, Hyperlink, Input, Label, Span } from "./../../components"
import { TwoColumnLayout } from "./../../layouts"
import { InputStyle, LabelStyle, formStyle, buttonStyle, hyperlinkStyle, spanStyle } from "./styles"
import { useAuth } from "../../context/auth"
import { useUser } from "../../context/user"
import { useNavigate } from "react-router-dom"
import { useCards } from "../../context/cards"
import { useCategories } from "../../context/categories"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { login } = useAuth()
  const { addUser} = useUser()

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await api.post("/users/login", { email: email, password: password})
      const user = await login({ token : response.data.token})
      addUser(user)
      navigate("/dashboard/playbooks");
    }catch(e) {
      alert(e.message)
    }
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