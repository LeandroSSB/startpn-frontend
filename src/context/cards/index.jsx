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

  const createCard = () => {

  }

  const removeCard = () => {


  }

  return (
    <cardsContext.Provider value={{ cards, createCard, removeCard }}> 
      { children } 
    </cardsContext.Provider>
  )
}


export const useCards = () => useContext(cardsContext)