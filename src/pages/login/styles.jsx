export const formStyle = {
  display: "flex",
  flexFlow: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  width: "37vw",
  margin: "0",
  padding: "0 0 0 10rem",
}

export const LabelStyle = {
  color: "black",
  weight: "400"
}


export const InputStyle = ({ name }) =>  {
  return {
  borderColor: "#D7D7D7",
  background: "white",
  color:"#A0A0A0",
  borderRadius: "10px",
  width: "500px",
  margin: "1rem 0 1rem 0rem",
  height: "50px",
  borderStyle: "solid",
  padding: "0px 0px 0px 15px",
  placeHolder: name
  } 
}

export const buttonStyle = {
  borderRadius: '60px',
  background: '#476EE6',
  borderStyle: 'none',
  padding: '1rem',
  margin: "0rem 3rem 0rem 0rem",
  color: "white",
  width: '250px',
  fontSize: "18px",
  fontWeight: "600"
}


export const hyperlinkStyle = {
  width: "100%",
  margin: "5px 0px 30px 0px",
  color: "#476EE6",
  fontWeight: "500",
  fontSize: "17px",
  textDecoration: "none"
}

export const spanStyle = {
  margin: "2rem"
}

