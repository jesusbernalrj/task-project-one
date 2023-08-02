import React from 'react'
import { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import { useProyect } from '../hooks/useProyect'

function CrearTask() {
    const {alert, mostrarAlerta, submitProyecto, task} = useProyect()
    const [tasknew, setTask] = useState({
        new: ''
      })
      const params = useParams()
     
    const [title, setTitle] = useState( params.id ? task.title : '')
    const [start, setStart] = useState(params.id ? task?.start?.slice(0, 10) : '')
    const [notes, setNotes] = useState(params.id ? task.notes : '')
    const [id, setId] = useState('')
    
   useEffect(() => {
   if(params.id){
     setId(task.id)
     setTask(task.title)
     setStart(task?.start?.slice(0, 10))
     setNotes(task.notes)
   }
   }, [params])
   
   
    const onInputChange = (e) => {
      setTitle(e.target.value)
    }
    const onInputChangeStart = (e) => {
      setStart(e.target.value)
    }
    const onInputChangeNotes = (e) => {
      setNotes(e.target.value)
    }
    const handleChangedtask = (e) => {
      setTask({
        [e.target.name] : e.target.value
      })
    }
    
      const onSubmit = async(e) => {
        e.preventDefault()
        if([title, start].includes('')) {
          
          mostrarAlerta({
            msg: 'Todos los Campos son Obligatorios'
          })
          return
        }
        await submitProyecto({id, title, start, notes})
        setId(null)
        setTitle('')
        setStart('')
        setNotes('')
      }
     
  return (
    <form onSubmit={onSubmit}>
         <div className='main-task-main'>
            <div className='d-flex justify-content-center'>
            <h3 className='main-task-text '>{ params.id ? 'Actualizar Tarea' : 'Crear una Nueva Tarea'}</h3>
            </div>           
            <select name='new' onChange={handleChangedtask} value={task.new} className="form-select form-select-sm mb-4 main-task-select p-2 text-center" aria-label="Ejemplo de .form-select-sm">
      <option className='main-task-option' selected>Tipo de Tarea </option>
     <option value="facil">Facil</option>
     <option value="urgente">Urgente</option>
   </select>
   {alert.msg}
{ tasknew.new === 'facil'  || params.id ? 
<>

<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Nombre Del Proyecto</label>
  <input type="text" className="form-control main-task-select animate__animated animate__fadeInLeft" name='title' value={title} onChange={onInputChange} />
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Fecha</label>
  <input type="date" className="form-control main-task-select animate__animated animate__fadeInLeft" name='start' value={start} onChange={onInputChangeStart} />
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Descripcion</label>
  <textarea className="form-control main-task-select animate__animated animate__fadeInLeft" name='notes' value={notes} onChange={onInputChangeNotes}  rows="3"></textarea>
</div>
<div className="mb-3">
<input type="submit" className="btn main-task-select animate__animated animate__fadeInLeft"  />

</div>
</> : null}
         </div>
        
        </form>
  )
}

export default CrearTask