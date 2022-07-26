import React from 'react'
import LeftBtn from '../LeftBtn/LeftBtn'
import meditation from '../../assets/images/meditation.svg'
import nageur from '../../assets/images/nageur.svg'
import cycliste from '../../assets/images/cycliste.svg'
import haltere from '../../assets/images/haltere.svg'
import copyright from '../../assets/images/copyright.svg'
import './leftNavBar.css'
import PropTypes from 'prop-types'

/**
 *
 * @returns {ReactElement}
 */
const LeftNavBar = () => {
  return (
    <aside className="leftNavBar">
      <div className="leftBtnContainer">
        <LeftBtn icone={meditation} />
        <LeftBtn icone={nageur} />
        <LeftBtn icone={cycliste} />
        <LeftBtn icone={haltere} />
      </div>
      <img className="copyright" src={copyright} alt="copyright" />
    </aside>
  )
}
LeftBtn.propTypes = {
  icone: PropTypes.string,
}
export default LeftNavBar