import { createContext, useState, useContext, useEffect, useMemo} from "react";
import { useNavigate } from "react-router-dom";


const AuthContext = createContext({})
export const AuthProvider = ({children}) => {
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate()
  
  const logout = () => {
    localStorage.clear();
    setAuth(false);
    navigate("/login");
    
  };
  const login = ({ token }) => {
    localStorage.setItem("@startpn:token", JSON.stringify(token));
    navigate("/dashboard");
    setAuth(true);
  }
  
  let token = localStorage.getItem("@market:token") || ""

  const tokenMemo = useMemo(() => {
    token = localStorage.getItem("@market:token") || "" 
    return token
  }, [token])
  
  useEffect(() => {
    if (tokenMemo) {
      setAuth(true);
    }
  }, [tokenMemo]);
  


  return (
    <AuthContext.Provider value={{auth,login,logout}} >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)