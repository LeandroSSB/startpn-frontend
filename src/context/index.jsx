import React from "react"
import { AuthProvider } from "./auth"
import { CategoriesProvider } from "./categories"
import { CardsProvider } from "./cards"

const Provider = ({ children }) => {

  return (
    <CardsProvider>
      <CategoriesProvider>
        <AuthProvider>
          {children}
        </AuthProvider>
      </CategoriesProvider>
    </CardsProvider>
  )

}

export default Provider 