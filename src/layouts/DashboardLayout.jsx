import { Outlet, useNavigate, NavLink, Link, useLocation } from "react-router-dom"
import {  Div, Label, Input } from "../components/index"
import { yourLogo, baloon, engine, account, toDo, playbooksSelect, playbooks, leave, accountSelect } from "./../images"
import { useUser } from "../context/user"


const DashboardLayout = ({ children }) => {
  const navigate = useNavigate()
  const { user } = useUser()

  const headerStyle = {
    display: "flex",
    width: "15vw",
    height: "89.9vh",
    flexFlow: "column",
    padding: "3rem",
    color: "#787486",
    border: "1px solid #D7D7D7",
    borderRadius: "17px"
  }


  const mainStyle = {
    display: "flex"

  }

  const sectionStyle = {
    width: "100%"
  }


  const handleLeave = () => {
    localStorage.clear()
    navigate("/login")
  }


  const listStyles = {
    listStyle: "none",
    margin: "2rem 0rem 3rem 0rem",
    padding: "0"
  }
  
  const itemStyle = ({ isActive }) =>  {

    return {
      display: "flex",
      alignItems: "center",
      margin: "1.5rem 0rem",
      width: "100%",
      fontSize: "18px",
      cursor: "pointer",
      textDecoration: "none",
      color: "#787486",
      backgroundColor: isActive? "#F7F9FB" : "",
      padding: isActive? "5px 10px" : "",
      borderRadius: "8px"
    }
  }

  const imageStyle = {
    margin: "0 1rem 0rem 0"
  }


  const accountStyle = {
    display: "flex",
    alignItems: "center",
    width: "234.43px",
    border: "1px solid #D8D8D8",
    position: "fixed",
    top: "17px",
    right: "35px",
    padding: "15px",
    borderRadius: "60px"
  }
  const accountImageStyle = {
    width: "37px",
    height: "37px",
    display: "flex",
    margin: "0 20px 0 0",
    borderRadius: "100%",
    border: "1px solid #D7D7D7",
  }

  return (
    <main style={mainStyle}>
    <header style={headerStyle}>
      <img src={yourLogo} alt="youlogo" width="200px"/>
      <nav style={listStyles}>
        <NavLink style={itemStyle} to={"/dashboard/playbooks"} >
          {({ isActive }) =>  <> <img style={imageStyle} src={isActive? playbooksSelect : playbooks}/> Playbooks </> }
        </NavLink>
        <NavLink style={itemStyle} to={"/dashboard/example"}> <img style={imageStyle} src={toDo} alt="toDo" /> Exemplo                         </NavLink>
        <NavLink style={itemStyle} to={"/dashboard/example"}> <img style={imageStyle} src={baloon} alt="baloon" /> Exemplo                     </NavLink>
        <NavLink style={itemStyle} to={"/dashboard/example"}> <img style={imageStyle} src={engine} alt="engine" /> Exemplo                     </NavLink>
        <NavLink style={itemStyle} to={"/dashboard/account"}>
          {({ isActive }) =>  <> <img style={imageStyle} src={isActive? accountSelect : account}/> Minha conta </> }
        </NavLink>
      </nav>
        <span style={itemStyle({ isActive: false})}  onClick={ () => handleLeave() }> <img style={imageStyle} src={leave} alt="leave" /> Sair </span>
    </header>
    <section style={sectionStyle}>
      <span style={accountStyle}> 
        <Div {...accountImageStyle} background={`url(${user.accountImage || ""})`} ></Div>
        {user.name.substring(0, 15) + "..."}
      </span>
      {children}
      <Outlet />
    </section>
    </main>

  )
}

export default DashboardLayout