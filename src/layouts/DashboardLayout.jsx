import { Outlet, useNavigate, NavLink, Link } from "react-router-dom"
import { List } from "../components/index"
import { yourLogo, baloon, engine, account, toDo, playbooksSelect, playbooks, leave, accountSelect } from "./../images"



const DashboardLayout = ({ children }) => {
  const navigate = useNavigate()

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
  
  const itemStyle = ({ isActive, IsPending }) =>  {

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
    width: "234.43px",
    border: "1px solid #D8D8D8",
    position: "fixed",
    top: "35px",
    right: "35px",
    padding: "15px",
    borderRadius: "60px"
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
      <span style={accountStyle}> Seu nome </span>
      {children}
      <Outlet />
    </section>
    </main>

  )
}

export default DashboardLayout