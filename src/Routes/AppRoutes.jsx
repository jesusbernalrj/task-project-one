import { Navigate, Route, Routes } from "react-router-dom"
import Login from "../auth/login"
import Register from "../auth/register"
import IndexMain from "../page/IndexMain"
import Profile from "../page/Profile"
import RutaProtegida from "../layout/RutaProtegida"
import Task from "../page/task"
import ProyectoActualizar from "../page/ProyectoActualizar"

function AppRoutes() {





  return (
    <Routes>
            <>
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="/" element={<RutaProtegida/>}>
            <Route index element={<IndexMain/>}/>
            <Route path="profile" element={<Profile/>}/>
            <Route path=":id" element={<Task/>}/>
            <Route path="proyectoActualizar/:id" element={<ProyectoActualizar/>}/>
            </Route>
                </>    
    </Routes>
  )
}

export default AppRoutes