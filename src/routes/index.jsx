import { Routes, Route } from "react-router-dom";
import { DashboardLayout, TwoColumnLayout } from "../layouts";
import Account from "../pages/account";
import CreateCard from "../pages/createCard";
import EditCard from "../pages/editCard";
import { PrivateRoute, Register, Login, Playbooks } from "./../pages/index";

const Pages = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute/>}>
        <Route path="dashboard" element={<DashboardLayout/>}>
          <Route path="playbooks/create" element={<CreateCard/>}> </Route>  
          <Route path="playbooks/edit"element={<EditCard/>}> </Route>  
          <Route path="playbooks" element={<Playbooks/>}></Route>
          <Route path="account" element={<Account/>}></Route>
        </Route>
      </Route>
      

      <Route element={<TwoColumnLayout/>}>
        <Route path="/">
          <Route path="/register"  element={<Register/>} > </Route>
        </Route>
        <Route path="/login"  element={<Login/>} > </Route>
      </Route>


    </Routes>
  )
}

export default Pages