import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { routes } from '../../routes'

const Header = () => {
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
          <svg className="bi me-2" width="40" height="32"></svg>
          <span className="fs-4">Lahkodiranje</span>
        </Link>
  
        <ul className="nav nav-pills">
            {routes.filter(route=>route.visible).map(route => <li className="nav-item"><NavLink to={route.to} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>{route.name}</NavLink></li>)}
        </ul>
      </header>
    </div>
  )
}

export default Header