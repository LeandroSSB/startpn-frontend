import {  useState } from "react"
import {  useNavigate } from "react-router-dom"
import { useCategories } from "../../context/categories"
import { useCards } from "../../context/cards"
import { plus, plusWhite } from "../../images"
import { Button, Div, Form, H1, Input, Item, List } from "./../../components/index"
import { container, cardsStyle, itemtitleContainer, itemtitle, contentStyle, buttonStyle, cardsItem, categoriesStyle, plusButton, title, listStyle, h1Style, itemStyle, InputStyle } from "./styles"
import ReactHtmlParser from 'react-html-parser';
import api from "../../services/api"

const Playbooks = () => {
  const [toggleCategory, setToggleCategory] = useState(false)
  const [newCategory, setNewCategory] = useState("")
  const { addCategory, categories} = useCategories()
  const { cards } = useCards()

  const navigate = useNavigate()

  const handleCreateCategory = (e) => {
    e.preventDefault()
    addCategory({ category: newCategory})
    setToggleCategory( toggle => !toggle)
  }

  const handleEditItem = (card) => {
    navigate("edit", {state: {card: card} } )
  }
 
  return (
    <>
      <H1 {...h1Style}> Playbooks </H1>
      <Div {...container}>
        <Div {...categoriesStyle}>
          <H1 {...title} >Categorias</H1>
          <List {...listStyle}>
            {categories.map((category) => <Item key={category.name}> {category.name} </Item>)}
            { !toggleCategory? <Item {...itemStyle} onClick={()=> setToggleCategory(toggle => !toggle)} > <img src={plus} alt="plus" /> Adicionar outra categoria</Item> :
              <Form onSubmit={handleCreateCategory}> <Input {...InputStyle} placeHolder="Nova categoria" onChange={(e) => setNewCategory(e.target.value)} type="text"> </Input>   </Form>
            }
          </List>
        </Div>
        <Div {...cardsStyle}>
          {
            !cards[0]? 
            <Div {...cardsItem} > 
              <H1 {...title} > Sem cards </H1>
            </Div>
            :
            cards.map(card => (
              <Div key={card.name} {...cardsItem} > 
                  <Div {...itemtitleContainer}>
                    <H1 {...itemtitle} > {card.name }   </H1> <Button {...buttonStyle} onClick={() => handleEditItem(card)} > Editar </Button>
                  </Div>
                  <Div {...contentStyle}> 
                    {ReactHtmlParser(card.content)}
                  </Div>

              </Div>
             ) )
          }
        </Div>
      </Div>
      <Button {...plusButton} onClick={() => navigate("/dashboard/playbooks/create")}> <img src={plusWhite} alt="plus" /></Button>
    </>
  )
}


export default Playbooks