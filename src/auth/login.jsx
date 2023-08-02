import React, { useState } from 'react'
import '../App.css'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import taskApi from '../api/TaskApi';
import useAuth from '../hooks/useAuth';
FormData={
  email:'',
  password: ''
}
function Login() {
  const {email, password, onInputChange, formState} = useForm(FormData)
  const [alert, setAlert] = useState('')
  const navigate = useNavigate()
   const {setAuth} =  useAuth()
    const styles = {
        backgroundColor: 'black',
        color: 'white',
        height: '100vh',
      };
  
  const onSubmit = async(e) => {
    e.preventDefault()
    try {
      const {data} = await taskApi.post('/auth', {email, password})
      setAlert('')
       localStorage.setItem('token', data.token)
       setAuth(data)
    } catch (error) {
      setAlert(error.response.data?.msg)
    }
   
  }

  return (
    <div style={styles}>
     <div className="formContainer">
    <div className="formWrapper">
  <h1 >Task Plus</h1>
    <h4 className="register">Inicia Sesion</h4>
     
    <form onSubmit={onSubmit}>
        {alert}
        <div className="form-grid">
            <label className="text-white">Email</label>
        <input placeholder="email" type="email" name='email' value={email} onChange={onInputChange} className='text-dark' />
        </div>
        <div className="form-grid">
            <label className="text-white">Password</label>
        <input placeholder="Password" type="password" name='password' value={password} onChange={onInputChange} className='text-dark'  />
        </div>
        
       
        <input className="btn btn-primary"  value='Inicia Sesion' type='submit'/>
        <h5 className="text-white">¿No Tienes una cuenta? <Link className='text-decoration-none text-white' to='/register'>Crea una Cuenta</Link></h5>
    </form>
  
  </div>
  </div>
    </div>
  )
}

export default Login