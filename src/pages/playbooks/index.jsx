import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import { plus, plusWhite } from "../../images"
import { DashboardLayout } from "../../layouts"
import { Button, Div, H1, List } from "./../../components/index"
import { container, cards, categories, plusButton, title, listStyle, h1Style } from "./styles"

const Playbooks = () => {

  console.log("Hey")

  return (
    <>
      <H1 {...h1Style}> Playbooks </H1>
      <Div {...container}>
        <Div {...categories}>
          <H1 {...title} >Categorias</H1>
          <List {...listStyle}>
            <li> <img src={plus} alt="plus"/> Adicionar outra categoria</li>
          </List>
        </Div>
        <Div {...cards}>

        </Div>
      </Div>
      <Button {...plusButton} > <img src={plusWhite} alt="plus" /></Button>
    </>
  )
}


export default Playbooks