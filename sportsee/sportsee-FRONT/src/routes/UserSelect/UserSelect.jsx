import { NavLink } from 'react-router-dom'
import karl from '../../assets/images/karl.jpg'
import cecilia from '../../assets/images/cecilia.jpg'
import john from '../../assets/images/john.jpg'
import './userselect.css'
import TopNav from '../../components/TopNav/TopNav'
import LeftNavBar from '../../components/LeftNavBar/LeftNavBar'
/**
 *
 * @returns {ReactElement} login page
 */
const UserSelect = () => {
  return (
    <div className="userSelect">
      <TopNav />
      <LeftNavBar />
      <div className="userContainer__userSelect">
        <ul className='ul__userSelect'>
          <NavLink className="navlink__userSelect" to="/12">
            <div className="userCard__userSelect">
              <div className="imgContainer__userSelect">
                <img className="img__userSelect" src={karl} alt="karl " />
              </div>
              <p className='p__userSelect'>Karl</p>
              <p className='p__userSelect'>Dovineau</p>
            </div>
          </NavLink>

          <NavLink className="navlink__userSelect" to="/18">
            <div className="userCard__userSelect">
              <div className="imgContainer__userSelect">
                <img className="img__userSelect" src={cecilia} alt="cécilia " />
              </div>
              <p className='p__userSelect'>Cecilia</p>
              <p className='p__userSelect'>Ratorez</p>
            </div>
          </NavLink>
          <NavLink className="navlink__userSelect" to="/errorPage">
            <div className="userCard__userSelect">
              <div className="imgContainer__userSelect">
                <img className="img__userSelect" src={john} alt="john " />
              </div>
              <p className='p__userSelect'>John</p>
              <p className='p__userSelect'>Doe</p>
            </div>
          </NavLink>
        </ul>
      </div>
    </div>
  )
}

export default UserSelect