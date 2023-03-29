import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import { useCategories } from "../../context/categories"
import { useCards } from "../../context/cards"
import { plus, plusWhite } from "../../images"
import { DashboardLayout } from "../../layouts"
import { Button, Div, Form, H1, Input, Item, List, Span } from "./../../components/index"
import { container, cardsStyle, cardsItem, categoriesStyle, plusButton, title, listStyle, h1Style, itemStyle, InputStyle } from "./styles"

const Playbooks = () => {
  const [toggleCategory, setToggleCategory] = useState(false)
  const [newCategory, setNewCategory] = useState("")
  const { addCategory, categories} = useCategories()
  const { cards, createCard, removeCard} = useCards()


  const handleCreateCategory = (e) => {
    e.preventDefault()
    addCategory({ category: newCategory})
    setToggleCategory( toggle => !toggle)
  }
  
  return (
    <>
      <H1 {...h1Style}> Playbooks </H1>
      <Div {...container}>
        <Div {...categoriesStyle}>
          <H1 {...title} >Categorias</H1>
          <List {...listStyle}>
            {categories.map((category) => <Item key={category}> {category} </Item>)}
            { !toggleCategory? <Item {...itemStyle} onClick={()=> setToggleCategory(toggle => !toggle)} > <img src={plus} alt="plus" /> Adicionar outra categoria</Item> :
              <Form onSubmit={handleCreateCategory}> <Input {...InputStyle({name:"Nova categoria"})} onChange={(e) => setNewCategory(e.target.value)} type="text"> </Input>   </Form>
            }
          </List>
        </Div>
        <Div {...cardsStyle}>
            <Div {...cardsItem} > 
              <H1 {...title} > Sem cards </H1>
            </Div>
            {cards.map(card => <Div key={card.name}>  </Div> )}
        </Div>
      </Div>
      <Button {...plusButton} > <img src={plusWhite} alt="plus" /></Button>
    </>
  )
}


export default Playbooks