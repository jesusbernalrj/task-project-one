import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import taskApi from '../api/TaskApi'
FormData={
  name: '',
  email:'',
  password: '',
  password2: ''
}
function Register() {
  const [alert, setAlert] = useState('')
  const {name, email, password, password2, onInputChange, formState} = useForm(FormData)
    const styles = {
        backgroundColor: 'black',
        color: 'white',
        height: '100vh',
    }

   const handleCreateUser = async(e) => {
    e.preventDefault()
     try {
      const {data} = await taskApi.post('/auth/new', {name, email, password})
      setAlert(data?.msg)      
     } catch (error) {
       setAlert(error.response.data?.msg)
     }
   }
    
   

  return (
    <div style={styles}>
     <div className="formContainer">
    <div className="formWrapper">
  <h1 >Task Plus</h1>
    <h4 className="register">Crea tu cuenta</h4>
     
    <form onSubmit={handleCreateUser} >
      {alert && <div className='alert alert-danger'>{alert}</div>}
    <div className="form-grid">
            <label className="text-white">Name</label>
        <input placeholder="Tu Nombre" type="text" name='name' value={name} onChange={onInputChange}  />
        </div>
        <div className="form-grid">
            <label className="text-white">Email</label>
        <input placeholder="email" type="email" name='email' value={email} onChange={onInputChange}  />
        </div>
        <div className="form-grid">
            <label className="text-white">Password</label>
        <input placeholder="Password" type="password" name='password' value={password} onChange={onInputChange}  />
        </div>
        <div className="form-grid">
            <label className="text-white"> Repetir Password</label>
        <input placeholder="Password" type="password" name='password2' value={password2} onChange={onInputChange}  />
        </div>
        
       
        <input className="btn btn-primary"  value='Inicia Sesion' type='submit'/>
        <h5 className="text-white">¿Tienes una cuenta? <Link className='text-decoration-none text-white' to='/login'>Inicia Sesion</Link></h5>
    </form>
  
  </div>
  </div>
    </div>
  )
}

export default Register