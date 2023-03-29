import { Routes, Route } from "react-router-dom";
import { DashboardLayout, TwoColumnLayout } from "../layouts";
import CreateCard from "../pages/createCard";
import { PrivateRoute, Register, Login, Playbooks } from "./../pages/index";

const Pages = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute/>}>
      </Route>
      
      <Route path="dashboard" element={<DashboardLayout/>}>
        <Route path="playbooks/create" element={<CreateCard/>}> </Route>  
        <Route path="playbooks/edit"> </Route>  
        <Route path="playbooks" element={<Playbooks/>}></Route>
      </Route>

      <Route element={<TwoColumnLayout/>}>
        <Route path="/register"  element={<Register/>} > </Route>
        <Route path="/login"  element={<Login/>} > </Route>
      </Route>


    </Routes>
  )
}

export default Pages