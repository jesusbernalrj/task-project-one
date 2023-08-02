import React from 'react'
import {FiLogOut} from 'react-icons/fi'
import useAuth from '../hooks/useAuth'
import { Navigate, Outlet } from 'react-router-dom'

function RutaProtegida() {
  const {cargando, auth} = useAuth()
  
  if(cargando) return 'Cargando...'
  return (
    <>
     <nav className="navbar navbar-light nav-header ">
    <div className="container-xxl">
      <a className="navbar-brand text-white nav-text">Task</a>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar"/>
        <button className="btn btn-outline-success" type="submit">Buscar</button>
      </form>
      <div>
        <h3 className='icons-header'><FiLogOut/></h3>
      </div>
    </div>
  </nav>
    {auth.uid ? <Outlet/> : <Navigate to='login'/>}
   
    </>
  )
}

export default RutaProtegida