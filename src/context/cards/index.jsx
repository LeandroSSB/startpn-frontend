import { createContext, useContext, useState, useEffect } from "react";
import api from "../../services/api";

const cardsContext = createContext({})
export const CardsProvider = ({ children }) => {

  const [ cards, setCards ] = useState(async() => {
    const local = JSON.parse(localStorage.getItem("@startpn:cards")) || []
    if(local){
      return local
    }else{
      return []
    }
  })

  useEffect(() =>{
    const fetchData = async () => {
      const { data } = await api.get("/cards")
      localStorage.setItem("@startpn:cards", JSON.stringify(data))
      setCards(data)
    }
    fetchData()
  }, [])

  const createCard = async ({ name,  content, categoryId}) => {
    if(cards.find(card => card.name === name)){
      return alert(`Card ${name} already exists`)
    }

    try {
      const { data } = await api.post("/cards", {name, content, categoryId })
      setCards([...cards, data  ])
    }catch(e){
      alert(e.message)
    }

  }

  const updateCards = async ({ name, newName, content, categoryId }) => {
    if(!cards.find(card => card.name === name)){
      return alert(`Card ${name} dows not exists`)
    }
    try {
      const newCards = cards.filter(a => a.name != name)
      const { data } = await api.put("/cards", {name: newName, content, categoryId })
      
      setCards([...newCards,data])
    }catch(e){
      alert(e)
    }

  }
  
  const removeCard = ({ name }) => {
    if(!cards.find(card => card.name === name)){
      return alert(`Card ${name} dows not exists`)
    }
    const newCards = cards.filter(card => card.name != name)

    setCards(newCards)

  }


  return (
    <cardsContext.Provider value={{ cards, createCard, removeCard, updateCards }}> 
      { children } 
    </cardsContext.Provider>
  )
}


export const useCards = () => useContext(cardsContext)