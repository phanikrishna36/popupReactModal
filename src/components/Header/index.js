// Write your code here
import {Link} from 'react-router-dom'

import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import './index.css'

const overlayStyles = {
  backgroundColor: '#ffff',
}

const Header = () => (
  <div className="head">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
      />
    </Link>
    <Popup
      modal
      trigger={
        <button
          className="trigger-button"
          type="button"
          data-testid="hamburgerIconButton"
        >
          <GiHamburgerMenu />
        </button>
      }
      overlayStyle={overlayStyles}
    >
      {close => (
        <div className="popup">
          <ul>
            <button
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose />
            </button>
            <li>
              <Link to="/">
                <div className="homePop">
                  <AiFillHome />
                  <h1>Home</h1>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <div className="homePop">
                  <BsInfoCircleFill />
                  <h1>About</h1>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </Popup>
  </div>
)

export default Header
