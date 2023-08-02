import { createContext, useEffect, useState } from "react";
import taskApi from "../api/TaskApi";


const ProyectoContexto = createContext()
const ProyectoProvider = ({children}) => {
 const [alert, setAlert] = useState([])
 const [proyecto, setProyecto] = useState([])
 const [task, setTask] = useState({})
 const [cargando, setCargando] = useState(false)
 const mostrarAlerta = alert => {
    setAlert(alert)
 }
 useEffect(() => {
   const viewProyect = async() => {
    try {
        const {data} = await taskApi.get('/events')
        setProyecto(data)
      } catch (error) {
        console.log(error)
      }
   }
   viewProyect()
 }, [])
 
 setTimeout(() => {
    setAlert({})
 }, 5000);

 const submitProyecto = async proyecto => {
  if(task.id){
   await editarProyecto(proyecto)
  }else {
   await  nuevoProyecto(proyecto)
  }

  
 }
 const editarProyecto = async proyecto => {
  try {
    const {data} = await taskApi.put(`/events/${proyecto.id}`, proyecto)
    const proyectosActualizados = proyecto.map(item => item.id === data.id ? data : item)
    setProyecto(proyectosActualizados)
    setAlert({
      msg: 'Se Actualizo Correctamente'
    })
    console.log(id)
  } catch (error) {
    console.log(error)
  }
 }
 const nuevoProyecto = async  proyecto => {
  try {
    const {data} = await taskApi.post('/events', proyecto)
    setProyecto([data, ...proyecto])
    setAlert({
        msg: 'Tarea Creada Correctamente'
    })   
  } catch (error) {
    console.log(error)
  }
 }

 const obtenerProyecto = async (id) => {
  setCargando(true)
  try {
    const {data} = await taskApi.get(`/events/${id}`)
    setTask(data)
  } catch (error) {
    console.log(error)
  } finally{
    setCargando(false)
  }
 }
 
 const eliminarProyecto = async(id) => {
  try {
    const {data} = await taskApi.delete(`/events/${id}`)
    const proyectosActualizados = proyecto.filter(item => item.id !== id)
    setProyecto(proyectosActualizados)
    setAlert({
      msg:'Proyecto Eliminado'
    })

    console.log(data)
  } catch (error) {
    console.log(error)
  }
}
const submitTarea = async tarea => {
console.log(tarea)
}
const [modal, setmodal] = useState(false)
return (
    <ProyectoContexto.Provider value={{
        mostrarAlerta,
        alert,
        submitProyecto,
        proyecto,
        obtenerProyecto,
        task,
        cargando,
        eliminarProyecto,
        modal,
        setmodal,
        submitTarea
        
    }}>
        {children}
    </ProyectoContexto.Provider>
)
}

export {
    ProyectoProvider }

export default ProyectoContexto