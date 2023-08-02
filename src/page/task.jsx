import { Link, useParams } from "react-router-dom"
import { useProyect } from "../hooks/useProyect"
import { useEffect, useState } from "react"
import { AiOutlineEdit, AiOutlineDelete, AiOutlinePlusCircle} from 'react-icons/ai'
import { ModalFormulario } from "../components/ModalReact"
import CrearTask from "../components/CrearTask"

function Task() {
  const {obtenerProyecto, task, cargando, eliminarProyecto, modal, setmodal} = useProyect()
const params = useParams()



useEffect(() => {
  obtenerProyecto(params.id)
}, [])

const handleClick = () => {
if(confirm('¿Deseas Eliminar este proyecto?')){
 eliminarProyecto(params.id)
}
}

const {title} = task
  return (
    <>
    {cargando ? '...' :  
    <div className="header-editar">
    <div className="container-xxl">
    <div className="row">
     
    <div className="col-4 header-task">
      <CrearTask/>
     
  </div>
  <div className="col-4">

  </div>
  <div className="col-4">
  <div className="d-flex justify-content-between p-0 gap-3">
  <Link to={`/proyectoActualizar/${params.id}`} className=" btn btn-light p-1 "><AiOutlineEdit/> Editar Proyecto </Link>
  <button onClick={() => setmodal(true)} className="btn btn-light p-0"> <AiOutlinePlusCircle/> Agregar nueva Tarea</button>
  <button onClick={handleClick} className="btn btn-light p-1"><AiOutlineDelete/> Eliminar Proyecto </button>
  </div>
  <ModalFormulario modal={modal} setmodal={setmodal}/>
  </div>
  </div>
  </div>
  </div> 
    }

    </>
  )
}

export default Task