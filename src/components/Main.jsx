import { useEffect, useState } from 'react'
import {BsFillArrowRightSquareFill} from 'react-icons/bs'
import { Link, useParams } from 'react-router-dom'
import { useProyect } from '../hooks/useProyect'
import CrearTask from './CrearTask'

function Main() {
  const { proyecto} = useProyect()

 


  return (
    <div className='main-task animate__animated animate__backInDown'>
    <div className='container-xxl'>
   <div className='row'>
    <div className='col-4  '>
        <CrearTask/>
    </div>
    <div className='col-4'>
    <form>
         <div className='main-task-main'>
            <div className='d-flex justify-content-center'>
            <h3 className='main-task-text-two'>Revisar Tus Tareas</h3>
            </div>           
           
<div>
{proyecto?.length > 0  ? proyecto?.slice(0, 5).map((item, index) => (
  <div className="mb-3" key={index}>
    <div className='column  d-flex justify-content-center task-review'>
 <Link to={item.id} className='btn'>{item.title}</Link>
  </div>
</div>
)) : 'No Hay Proyectos'}
<div className='d-flex justify-content-center mt-2'>
  <Link className='text-decoration-none btn btn-dark mt-2'>Ver Todas las Tareas</Link>
</div>
</div>
         </div>
        
        </form>
    </div>
    <div className='col-4'>
    <form>
         <div className='main-task-main'>
            <div className='d-flex justify-content-center'>
            <h3 className='main-task-text-two'>Tareas Finalizadas</h3>
            </div>           
           
<div className='d-flex justify-content-center mt-4'>
<input type='submit' className='btn text-white' value='Crear Tarea'/>
</div>
         </div>
        
        </form>
    </div>
   </div>
   <div className='d-flex justify-content-end '>
    <Link to='/profile' className='btn btn-arrow'><BsFillArrowRightSquareFill/></Link>
    </div>
    </div>
    
    </div>
  )
}

export default Main