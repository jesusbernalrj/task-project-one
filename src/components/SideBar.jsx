import React, { useContext } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineHome, AiOutlineMessage, AiOutlineUser, AiOutlineGift,
 AiOutlineRocket, AiOutlineSetting, AiOutlineNotification} from 'react-icons/ai'
import {BsListTask, BsFillArrowLeftSquareFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

function SideBar() {
   const {auth} = useAuth()

console.log(auth)
  return (
    <div className='main-container d-flex animate__animated animate__fadeInLeft'>
   <div className='sidebar' id='side_nav'>
    <div className='header-box px-3 pt-3 pb-4'>
     <h1 className='fs-4'><span className='bg-white text-dark rounded shadow px-2 me-3'>Task</span><span className='text-white'>{auth.name}</span></h1>
     <button className='btn d-md-none d-block close-btn px-1 py-0 text-white'><GiHamburgerMenu/></button>
    </div>
    <ul className='list-unstyled px-2'>
        <li><button className='btn text-white d-block mb-3'> <span className='me-2'><AiOutlineHome/></span>DashBoard</button></li>
        <li><button className='btn text-white d-block mb-3'><span className='me-2'><BsListTask/></span>Task</button></li>
        <li><button className='btn text-white d-block mb-3'><span className='me-2'><AiOutlineRocket/></span>Projects</button></li>
        <li><button className='btn text-white mb-2 '> <span className='me-2'><AiOutlineMessage/></span> <span>Messages</span></button>
        <span className='bg-dark rounded-pill text-white  py-0 px-2'>02</span>
        </li>
        <li><button className='btn text-white d-block mb-3'><span className='me-2'><AiOutlineUser/></span>Amigos</button></li>
        <li><button className='btn text-white d-block mb-3'><span className='me-2'><AiOutlineGift/></span>Gift</button></li>
    </ul>
    <hr className='h-color mx-2'/>
    <ul className='list-unstyled px-2'>
    <li><button className='btn text-white d-block mb-3'> <span className='me-2'><AiOutlineSetting/></span> Settings</button></li>
    <li><button className='btn text-white d-block mb-3'><span className='me-2'><AiOutlineNotification/></span>Notifications</button></li>
    <li><button className='btn text-white d-block mb-3'><span className='me-2'><FiLogOut/></span>Log out</button></li>
    <Link to='/' className='text-decoration-none'><button className='btn text-white d-block mb-3'><span className='me-2'><BsFillArrowLeftSquareFill/></span>Back</button></Link>
   

    </ul>
   </div>
    <div className='content'>
   
    </div>
    </div>
  )
}

export default SideBar