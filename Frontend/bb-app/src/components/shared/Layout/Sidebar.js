import React from 'react'
import { Link, useLocation } from 'react-router-dom'
// import { userMenu } from './Menu/userMenu'
import '../../../Styles/Layout.css'

const Sidebar = () => {
    const location = useLocation()
    // const isActive = location.pathname
  return (
    <div>
      <div className="sidebar">
        <div className="menu">
          <div className={`menu-item ${location.pathname === '/' && "active"}`}>
            <i className="fa-solid fa-warehouse"></i>
            <Link to="/">Inventory</Link>
          </div>
          <div className={`menu-item ${location.pathname === '/donar' && "active"}`}>
            <i className="fa-solid fa-hand-holding-medical"></i>
            <Link to="/donar">Donar</Link>
          </div>
          <div className={`menu-item ${location.pathname === '/hospital' && "active"}`}>
            <i className="fa-solid fa-hospital"></i>
            <Link to="/hospital">Hospital</Link>
          </div>
          <div className={`menu-item ${location.pathname === '/organisation' && "active"}`}>
            <i className="fa-sharp fa-solid fa-building-ngo"></i>
            <Link to="/organisation">Organisation</Link>
          </div>

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
