import React from 'react'
import { BiUserCircle} from 'react-icons/bi'
import {useSelector} from 'react-redux'
import { toast } from 'react-toastify';
import {Link, useLocation, useNavigate} from 'react-router-dom'
const Header = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const {user} = useSelector((state) => state.auth)

    //LOGOUT FUNCTIONALITY
    const handleLogout=()=>{
        localStorage.clear()
        toast.success('Logout Successful!')
        navigate('/login')
    }
  return (
    <>
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-brand">
            <h5>Blood Bank App</h5>
          </div>
          <ul className="navbar-nav flex-row">
            <li className="nav-item mx-3">
              <p className="nav-link">
                <BiUserCircle />
                Welcome!{" "}
                {user?.name ||
                  user?.hospitalName ||
                  user?.organisationName}{" "}
                &nbsp;
                <span className="badge bg-secondary">{user?.role}</span>
              </p>
            </li>
            {location.pathname === "/" ||
            location.pathname === "/donar" ||
            location.pathname === "/hospital" ? (
              <li className="nav-item mx-3">
                {user?.role === "donar" ? (
                  <button className="btn btn-outline-warning" disabled>
                    Analytics
                  </button>
                ) : (
                  <Link to="/analytics" className="nav-link">
                    <button className="btn btn-outline-warning">
                      Analytics
                    </button>
                  </Link>
                )}
              </li>
            ) : (
              <li className="nav-item mx-3">
                {user?.role === "donar" ? (
                  <button className="btn btn-outline-warning" disabled>
                    Home
                  </button>
                ) : (
                  <Link to="/" className="nav-link">
                    <button className="btn btn-outline-warning">Home</button>
                  </Link>
                )}
              </li>
            )}
            <li className="nav-item mx-3">
              <button className="btn btn-danger" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header
