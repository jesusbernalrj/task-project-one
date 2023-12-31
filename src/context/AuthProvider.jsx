import { createContext, useEffect, useState } from "react";
import taskApi from "../api/TaskApi";
import { useNavigate } from "react-router-dom";




const AuthContext = createContext()

const AuthProvider = ({children}) => {

const [auth, setAuth] = useState({})
const [cargando, setCargando] = useState(true)
const navigate = useNavigate()

useEffect(() => {
   const autenticarUsuario = async () => {
    const token = localStorage.getItem('token')
    if(!token) {
      setCargando(false)
      return
    }
   try {
     const {data} = await taskApi.get('/auth/renew')
     setAuth(data)
     navigate('/')
   } catch (error) {
     setAuth({})
   }finally{
    setCargando(false)
   }
  
   }
   autenticarUsuario()

}, [])


    return (
        <AuthContext.Provider value={{
          auth,
          setAuth,
          cargando
        }}>
        {children}
    </AuthContext.Provider>
    )
  }

  export {
    AuthProvider
  }

  export default AuthContext