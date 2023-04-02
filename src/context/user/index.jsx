import { createContext, useContext,useEffect, useState } from "react";
import api from "../../services/api";



const userContext = createContext({})
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const local = JSON.parse(localStorage.getItem("@startpn:user")) || {}
    return local
  })
  
  useEffect(() =>{
    localStorage.setItem("@startpn:user", JSON.stringify(user))
    
  }, [user])
  
  const updateUser = async(user) => {
    try {
      await api.put("users", user)
      setUser(user)
    }catch(e) {
      alert(e.message)
    }
  }

  const addUser = async(user) => {
      setUser(user)
  }
  return (
    <userContext.Provider value={{ user, updateUser, addUser }} >
        {children}
    </userContext.Provider>
  )
}

export const useUser = () => useContext(userContext)