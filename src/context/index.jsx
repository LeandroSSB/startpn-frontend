import React from "react"
import { AuthProvider } from "./auth"



const Provider = ({ children }) => {

  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )

}

export default Provider 