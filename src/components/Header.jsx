import {FiLogOut} from 'react-icons/fi'

const Header = () => {
 
  return (
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
  )
}

export default Header