import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import Register from "./register/index";

const Pages = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute/>}>

      </Route>
      <Route path="/register"  element={<Register/>} > </Route>
      <Route path="/login"  element > </Route>

    </Routes>
  )
}

export default Pages