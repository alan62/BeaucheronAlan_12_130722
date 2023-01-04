import React from 'react'
import './topNav.css'
import logo from '../../assets/images/logo.svg'
import { NavLink } from 'react-router-dom'
/**
 * @returns {ReactElement}
 */
const TopNav = () => {
  return (
    <header className="topNav">
      <img className="img__topNav" src={logo} alt="logo" />
      <nav className="navigation">
        <ul className='ul__topNav'>
          <NavLink className="accueil" to="/">
            Accueil
          </NavLink>
          <li className='li__topNav'>Profil</li>
          <li className='li__topNav'>Réglage</li>
          <li className='li__topNav'>Communauté</li>
        </ul>
      </nav>
    </header>
  )
}

export default TopNav