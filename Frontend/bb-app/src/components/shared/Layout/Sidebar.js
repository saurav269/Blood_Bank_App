import React from 'react'
import { Link, useLocation } from 'react-router-dom'
// import { userMenu } from './Menu/userMenu'
import '../../../Styles/Layout.css'
import { useSelector } from 'react-redux';

const Sidebar = () => {
    const location = useLocation()
    const {user} = useSelector(state => state.auth)
    // const isActive = location.pathname
  return (
    <div>
      <div className="sidebar">
        <div className="menu">
          {user?.role === "organisation" && (
            <>
              <div
                className={`menu-item ${location.pathname === "/" && "active"}`}
              >
                <i className="fa-solid fa-warehouse"></i>
                <Link to="/">Inventory</Link>
              </div>
              <div
                className={`menu-item ${
                  location.pathname === "/donar" && "active"
                }`}
              >
                <i className="fa-solid fa-hand-holding-medical"></i>
                <Link to="/donar">Donar</Link>
              </div>
              <div
                className={`menu-item ${
                  location.pathname === "/hospital" && "active"
                }`}
              >
                <i className="fa-solid fa-hospital"></i>
                <Link to="/hospital">Hospital</Link>
              </div>
            </>
          )}

          {user?.role === "admin" && (
            <>
              <div
                className={`menu-item ${location.pathname === "/donar-list" && "active"}`}
              >
                <i className="fa-solid fa-hand-holding-medical"></i>
                <Link to="/donar-list">Donor List</Link>
              </div>
              
              <div
                className={`menu-item ${
                  location.pathname === "/hospital-list" && "active"
                }`}
              >
                <i className="fa-solid fa-hospital"></i>
                <Link to="/hospital-list">Hospital List</Link>
              </div>
              <div
                className={`menu-item ${
                  location.pathname === "/org-list" && "active"
                }`}
              >
                <i className="fa-solid fa-warehouse"></i>
                <Link to="/org-list">Organisation List</Link>
              </div>
            </>
          )}
          {(user?.role === "donar" || user?.role === "hospital") && (
            <div
              className={`menu-item ${
                location.pathname === "/organisation" && "active"
              }`}
            >
              <i className="fa-sharp fa-solid fa-building-ngo"></i>
              <Link to="/organisation">Organisation</Link>
            </div>
          )}
          {user?.role === "hospital" && (
            <div
              className={`menu-item ${
                location.pathname === "/consumer" && "active"
              }`}
            >
              <i className="fa-sharp fa-solid fa-building-ngo"></i>
              <Link to="/consumer">Consumer</Link>
            </div>
          )}

          {user?.role === "donar" && (
            <div
              className={`menu-item ${
                location.pathname === "/donation" && "active"
              }`}
            >
              <i className="fa-sharp fa-solid fa-building-ngo"></i>
              <Link to="/donation">Donation</Link>
            </div>
          )}

          {/* {userMenu.map((menu) =>{
                    const isActive = location.pathname === menu.path;
                    return (
                        <div className={`menu-item ${isActive &&  'active'}`} key={menu.name}>
                            <i className={menu.icon}></i>
                            <Link to={menu.path}>{menu.name}</Link>
                        </div>
                    )
                })} */}
        </div>
      </div>
    </div>
  );
}

export default Sidebar
