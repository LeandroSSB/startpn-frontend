import { useNavigate } from "react-router-dom"
import { List } from "../components/index"
import { yourLogo, baloon, engine, account, toDo, playbooks, leave } from "./../images"



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
    console.log("hey")
    localStorage.clear()
    navigate("/login")
  }


  const listStyles = {
    listStyle: "none",
    margin: "2rem 0rem 3rem 0rem",
    padding: "0"
  }

  const itemStyle = {
    display: "flex",
    alignItems: "center",
    margin: "1.5rem 0rem",
    width: "100%",
    fontSize: "18px",
    cursor: "pointer"
  }

  const imageStyle = {
    margin: "0 1rem 0rem 0"
  }


  const linkStyle = {
    textDecoration: "none",
    color: "#787486"
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
      <ul style={listStyles}>
        <li style={{...itemStyle, background: "#F7F9FB", borderRadius: "18px", padding: "3px 10px"}} > <img style={imageStyle} src={playbooks} alt="playbooks" /> <a style={linkStyle} href="/playbooks"> Playbooks  </a>  </li>
        <li style={itemStyle} > <img style={imageStyle} src={toDo} alt="toDo" /> Exemplo                        </li>
        <li style={itemStyle} > <img style={imageStyle} src={baloon} alt="baloon" /> Exemplo                    </li>
        <li style={itemStyle} > <img style={imageStyle} src={engine} alt="engine" /> Exemplo                    </li>
        <li style={itemStyle} > <img style={imageStyle} src={account} alt="account" /> <a  style={linkStyle} href="/account"> Minha Conta </a>     </li>
      </ul>
        <span style={itemStyle} onClick={ () => handleLeave() }> <img style={imageStyle} src={leave} alt="leave" /> Sair </span>
    </header>
    <section style={sectionStyle}>
      <span style={accountStyle}> Seu nome </span>
      {children}
    </section>
    </main>

  )
}

export default DashboardLayout