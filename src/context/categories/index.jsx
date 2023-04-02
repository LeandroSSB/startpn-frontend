import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";

const CategoriesContext = createContext({})
export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState(() => {
    const local = JSON.parse(localStorage.getItem("@startpn:category")) || []
    return local
  })

  useEffect(() =>{
    const fetchdata = async () => {
      const { data } = await api.get("/categories")
      localStorage.setItem("@startpn:category", JSON.stringify(data))
      setCategories(data)
    }
    fetchdata()
  }, [])

  const addCategory = async ({ category }) => {
    if(categories.find(a => a.name == category)){
      return alert("categoria repetida")
    }
    try {
      const { data  } = await api.post("/categories", { name: category })
      setCategories([...categories, data])

    }catch(e){
      return alert(e.message)
    }
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