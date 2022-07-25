import React from 'react'
import './cardInfo.css'
import PropTypes from 'prop-types'
/**
 * Card info component
 * @param {string} icone
 * @param {number} number
 * @param {string} unit
 * @param {string} type
 * @returns {ReactElement} card info of daily intake
 */
const CardInfo = ({ icone, number, unit, type }) => {
  return (
    <div className="cardInfoContainer__cardInfo">
      <div className="imgContainer__cardInfo" id={type}>
        <img className="img__cardInfo" src={icone} alt="icone" />
      </div>
      <div>
        <p className="numberAndUnit__cardInfo">
          {number}
          {unit}
        </p>
        <p className="type__cardInfo">{type}</p>
      </div>
    </div>
  )
}
CardInfo.propTypes = {
  icone: PropTypes.string,
  number: PropTypes.number,
  unit: PropTypes.string,
  type: PropTypes.string,
}

export default CardInfo