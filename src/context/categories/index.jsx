import { createContext, useContext, useEffect, useState } from "react";

const CategoriesContext = createContext({})
export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState(() => {
    const local = JSON.parse(localStorage.getItem("@startpn:category")) || []
    if(local){
      return local
    }else{
      return []
    }
  })

  useEffect(() =>{
    localStorage.setItem("@startpn:category", JSON.stringify(categories))
    
  }, [categories])

  const addCategory = ({ category }) => {
    if(categories.find(a => a == category)){
      return alert("categoria repetida")
    }
    setCategories([...categories, category])
    localStorage.setItem("@startpn:category", JSON.stringify(categories))
  }

  const removeCategory = ({ category }) => {
    const newCategories = categories.filter(cat => cat != category)
    setCategories(newCategories )
    localStorage.setItem("@startpn:category", JSON.stringify(categories))
  }


  return (
    <CategoriesContext.Provider value={{ addCategory, removeCategory, categories }} >
      {children}
    </CategoriesContext.Provider>
  )
}

export const useCategories = () => useContext(CategoriesContext)