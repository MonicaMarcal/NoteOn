import 'bulma/css/bulma.min.css';//node_modules
import LogoImage from '../../assets/images/logo.png';
import '../../styles/header.scss'
import { Link } from 'react-router-dom'; 

function Header(){
  return(
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item">
          <Link to="/">
              <img src={LogoImage} width="112" height="28"/>
          </Link>
          </a>

          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>  
          <div className="navbar-end " id="navbar-menu">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-white has-text-custom-purple">
                  <Link to="/register">Register</Link>
                </a>
                <a className="button is-outlined is-custom-purple">
                  <Link to="/login">Login</Link>
                </a>
              </div>
            </div>
          </div>
    </nav>
  )
}
 
 export default Header;
