import { steveJobs, landingWave, yourLogo } from "../images"

const TwoColumnLayout = ({ children }) => {

  const colum1 = {
    backgroundImage: `url(${landingWave})`,
    width: "50vw",
    display: "flex",
    alignItems: "flex-end",
  }

  const colum2 = {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
  }
  const mainStyle = {
    display: 'flex',
    height: "100vh"

  }

  const imageStyle = {
    width: "50vw",
  }

  return (
    <main style={mainStyle}>
      <aside style={colum1}>
        <img src={steveJobs} alt="steveJobs"  style={imageStyle}/>
      </aside>
      <article style={colum2}>
        <header style={{ padding: "5rem 0", width: "100%"}}>
          <img style={{width: "190px", padding: "0 62px"}}src={yourLogo} alt="yourLogo" />
        </header>
        { children }
      </article>
    </main>
  )
}

export default TwoColumnLayout