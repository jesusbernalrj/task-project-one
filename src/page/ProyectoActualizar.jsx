import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProyect } from '../hooks/useProyect'
import CrearTask from '../components/CrearTask'

function ProyectoActualizar() {
    const {obtenerProyecto, proyectos, cargando} = useProyect()
    const params = useParams()
   
    useEffect(() => {
      obtenerProyecto(params.id)
    }, [])
   
  return (
    <div className='main-task animate__animated animate__backInDown'>
    <div className='container-xxl'>
   <div className='row'>
    <div className='col-4 '></div>
    <div className='col-4 '>
    <CrearTask/>
    </div>
    </div>
    </div>
    </div>
  )
}

export default ProyectoActualizar