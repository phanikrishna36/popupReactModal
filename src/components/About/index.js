import {Link} from 'react-router-dom'
import Header from '../Header'

const About = () => (
  <>
    <Header />
    <Link to="/about">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
          alt="about"
        />
      </div>
    </Link>
  </>
)

export default About
