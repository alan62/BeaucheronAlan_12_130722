import React from 'react'
import { NavLink } from 'react-router-dom'
import './errorPage.css'

const ErrorPage = () => {
  return (
    <div className="errorPageContainer">
      <h1 className='h1__errorPage'>404</h1>
      <p>Désolé la page demandée n'existe pas</p>
      <NavLink className="navlink__errorPage" to="/">
        retour à l'accueil
      </NavLink>
    </div>
  )
}

export default ErrorPage