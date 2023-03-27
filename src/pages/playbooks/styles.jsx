export const container = {
  display: "flex",
  margin: "2rem 0 0 0"
}

export const categoriesStyle = {
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  width: "321px",
  height: "83vh",
  border: "1px solid #D7D7D7",
  overflow: "auto",
  margin: "0px 0px 0px 47px",
  borderRadius: "10px",
  padding: "21px"
}

export const cards = {
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  width: "50vw",
  height: "83vh",
  overflow: "auto",
  margin: "0px 0px 0px 47px",
  borderRadius: "10px",
}

export const cardsItem = {
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  width: "45vw",
  height: "20vh",
  overflow: "auto",
  border: "1px solid #D7D7D7",
  borderRadius: "10px",
  padding: "21px"
}


export const plusButton = {
  position: "fixed",
  right: "35px",
  bottom: "35px",
  border: "none",
  borderRadius: "60px",
  background: "#476EE6",
  padding: "25px",
  cursor: "pointer"
}

export const title = {
  width: "100%",
  fontWeight: "500",
  textAlign: "center",
  fontSize: "16px",
  color: "#101828",
  borderBottom: "1px solid #E4E4EF",
  padding: "0 0 17px 0",
  margin: "0"
}

export const listStyle = {
  listStyle: "none",
  width: "100%",
  padding: "0"
}

export const h1Style = {
  color: "#476EE6",
  fontWeight: "600",
  fontSize: "30px",
  margin: "1.5rem 3rem"
}

export const itemStyle = { 
  display: "flex",
  color: "#476EE6",
  fontWeight: "500",
  fontSize: "15px",
  cursor: "pointer"
}

export const InputStyle = ({ name }) =>  {
  return {
  borderColor: "#D7D7D7",
  background: "white",
  color:"#A0A0A0",
  borderRadius: "10px",
  width: "290px",
  margin: ".5rem 0 1rem 0rem",
  height: "28px",
  borderStyle: "solid",
  padding: "0px 0px 0px 15px",
  placeHolder: name
  } 
}