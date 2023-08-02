
import { useState } from "react";
import Modal from "react-modal";
import { useProyect } from "../hooks/useProyect";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement('#root');
export const ModalFormulario = ({modal, setmodal}) => {
const {submitTarea, mostrarAlerta} = useProyect()
const [nombre, setnombre] = useState('')
const [start, setstart] = useState('')
const [descripcion, setdescripcion] = useState('')
 
const onCloseModal = () => {
  setmodal(false)
}

const onSubmitModal = e => {
    e.preventDefault()
    if([nombre, start, descripcion].includes('')) {
 mostrarAlerta({
    msg: 'Todos los campos son Obligatorios'
 })
 return
    }
    submitTarea({nombre, start, descripcion})
    

}
  return (
    <>
   
      <Modal
        isOpen={modal}
        onRequestClose={onCloseModal}
        style={customStyles}
        className="modal"
        overlayClassName="modal-fondo"
        closeTimeoutMS={200}
      >
        <div>
          <h3>Agregar Tarea</h3>
        </div>
        <nav className="navbar navbar-light bg-light">
   <div className="container-fluid">
  
  </div>
 </nav>
 <form onSubmit={onSubmitModal}>
        
<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Nueva Tarea</label>
  <input type="text" className="form-control main-task-select animate__animated animate__fadeInLeft" name='nombre' value={nombre} onChange={(e) => setnombre(e.target.value)}  />
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Fecha de Entrega</label>
  <input type="date" className="form-control main-task-select animate__animated animate__fadeInLeft" name='start' value={start} onChange={(e) => setstart(e.target.value)}  />
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Descripcion</label>
  <textarea className="form-control main-task-select animate__animated animate__fadeInLeft" name='descripcion' value={descripcion} onChange={(e) => setdescripcion(e.target.value)}  rows="3"></textarea>
</div>
<div className="mb-3">
<input type="submit" className="btn main-task-select animate__animated animate__fadeInLeft"  />

</div>

        
        
        </form>
      
       
      </Modal>
    </>
  );
};
