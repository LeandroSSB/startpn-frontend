import { createContext, useContext, useState, useEffect } from "react";


const cardsContext = createContext({})
export const CardsProvider = ({ children }) => {

  const [ cards, setCards ] = useState(() => {
    const local = JSON.parse(localStorage.getItem("@startpn:cards")) || []
    if(local){
      return local
    }else{
      return []
    }
  })

  useEffect(() =>{
    localStorage.setItem("@startpn:cards", JSON.stringify(cards))
    
  }, [cards])

  const createCard = ({ name, category, content}) => {
    if(cards.find(card => card.name === name)){
      return alert(`Card ${name} already exists`)
    }
    setCards([...cards, {name, category, content} ])

  }

  const removeCard = ({ name }) => {
    if(!cards.find(card => card.name === name)){
      return alert(`Card ${name} dows not exists`)
    }
    const newCards = cards.filter(card => card.name != name)

    setCards(newCards)

  }

  const updateCards = ({ name, newName, content, category }) => {
    if(!cards.find(card => card.name === name)){
      return alert(`Card ${name} dows not exists`)
    }
    const newCards = cards.filter(card => card.name != name)
    
    setCards([...newCards,{ name: newName, content, category }])

  }

  return (
    <cardsContext.Provider value={{ cards, createCard, removeCard, updateCards }}> 
      { children } 
    </cardsContext.Provider>
  )
}


export const useCards = () => useContext(cardsContext)