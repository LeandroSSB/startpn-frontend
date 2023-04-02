import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

const AuthContext = createContext({})
export const AuthProvider = ({children}) => {
  const [ token , setToken] = useState(() => {
    const token = JSON.parse(localStorage.getItem("@startpn:token")) || "" ;
    return token 
  });
  const [auth, setAuth] = useState(() => {
    if(!token) {
      return false
    }
    return true
  });

  const navigate = useNavigate()
  
  const logout = () => {
    localStorage.clear();
    setAuth(false);
    navigate("/login");
    
  };
  const login = async ({ token }) => {
    localStorage.setItem("@startpn:token", JSON.stringify(token));
    const { data } = await api.get("/users")
    setAuth(true);
    setToken(token)
    return data
  }
  
  
  useEffect(() => {
    if(!token){
      setAuth(false);
    }
  }, []);
  


  return (
    <AuthContext.Provider value={{auth,login,logout}} >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)