import React from 'react'
import './leftBtn.css'
import PropTypes from 'prop-types'

/**
 *
 * @param {string} icone
 * @returns {ReactElement}
 */
const LeftBtn = ({ icone }) => {
  return (
    <div className="imgContainer">
      <img className='img__leftBtn' src={icone} alt="sport" />
    </div>
  )
}
LeftBtn.propTypes = {
  icone: PropTypes.string,
}

export default LeftBtn