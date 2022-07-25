import React from 'react'
import './header.css'
import clap from '../../assets/images/clap.png'
import PropTypes from 'prop-types'

/**
 * Dashboard header to greet the user
 * @param {string} userName user name
 * @returns {ReactElement} hi user
 */

const Header = ({ userName }) => {
  return (
    <div className="title__header">
      <div className="hello__header">
        <h1 className='h1__header'>Bonjour</h1>
        <h1 className="userName__header">{userName}</h1>
      </div>
      <p className="congrats__header">
        Félicitation ! Vous avez explosé vos objectifs hier
        <img className="img__header" src={clap} alt="clap" />
      </p>
    </div>
  )
}
Header.propTypes = {
  userName: PropTypes.string,
}

export default Header