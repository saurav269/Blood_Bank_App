import React from 'react'
import { BiUserCircle} from 'react-icons/bi'
import {useSelector} from 'react-redux'
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom'
const Header = () => {
    const navigate = useNavigate()
    const {user} = useSelector(state => state.auth)

    //LOGOUT FUNCTIONALITY
    const handleLogout=()=>{
        localStorage.clear()
        toast.success('Logout Successful!')
        navigate('/login')
    }
  return (
    <>
        <nav className='navbar'>
            <div className='container-fluid'>
                <div className='navbar-brand'>
                    <h5>Blood Bank App</h5>
                </div>
                <ul className='navbar-nav flex-row'>
                    <li className='nav-item mx-3'>
                        <p className='nav-link'>
                       <BiUserCircle/>
                            Welcome {user?.name}</p>
                    </li>
                    <li className='nav-item mx-3'>
                        <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Header
