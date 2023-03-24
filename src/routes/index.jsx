import { Routes, Route } from "react-router-dom";
import { PrivateRoute, Register, Login } from "./../pages/index";

const Pages = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute/>}>

      </Route>
      <Route path="/register"  element={<Register/>} > </Route>
      <Route path="/login"  element={<Login/>} > </Route>

    </Routes>
  )
}

export default Pages