import { createContext, useContext, useState } from "react";
import api from "../../services/api";



const userContext = createContext({})
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // const user = api.get()
    // return user 
  })

  const getUser = () => {

  }

  const updateUser = (user) => {

  }

  return (
    <userContext.Provider value={{user, getUser, updateUser }} >
        {children}
    </userContext.Provider>
  )
}

export const useUser = () => useContext(userContext)