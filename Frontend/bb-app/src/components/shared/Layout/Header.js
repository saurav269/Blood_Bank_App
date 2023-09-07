import React from 'react'
import { BiUserCircle} from 'react-icons/bi'
import {useSelector} from 'react-redux'
const Header = () => {

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
                            Welcome</p>
                    </li>
                    <li className='nav-item mx-3'>
                        <button className='btn btn-danger'>Logout</button>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Header
