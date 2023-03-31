import React from "react"
import { AuthProvider } from "./auth"
import { CategoriesProvider } from "./categories"
import { CardsProvider } from "./cards"
import { UserProvider } from "./user"

const Provider = ({ children }) => {

  return (
    <UserProvider>
      <CardsProvider>
        <CategoriesProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </CategoriesProvider>
      </CardsProvider>
    </UserProvider>
  )

}

export default Provider 