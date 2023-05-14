import 'bulma/css/bulma.min.css';//node_modules
import '../../styles/header.scss'
import { Link } from 'react-router-dom'; 

function Header(){
  return(
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item">
          <Link to="/">
              <h1 className='title'>NOTEON</h1>
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
                <a>
                  <Link to="/register" className="button is-white has-text-black">Register</Link>
                </a>
                <a>
                  <Link to="/login" className="button is-outlined is-black">Login</Link>
                </a>
              </div>
            </div>
          </div>
    </nav>
  )
}
 
 export default Header;
