import { useContext } from "react"
import ProyectoContexto from "../context/ProyectosProvider"

export const useProyect = () => {
    return useContext(ProyectoContexto)
}