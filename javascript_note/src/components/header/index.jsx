import 'bulma/css/bulma.min.css';//node_modules
import { Navbar, Container } from 'react-bulma-components';
import LogoImage from '../../assets/images/logo.png';
import '../../styles/header.scss'
import { Link } from 'react-router-dom'; 

function Header(){
  return(
    <Navbar>
    <Container>
      <Navbar.Brand>
          <Link to="/">
              <img src={LogoImage} />
          </Link>
      <Navbar.Burger
        className="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbar-menu">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </Navbar.Burger>
      </Navbar.Brand>
  
     <Navbar.Menu id="navbar-menu">
     <div className="navbar-item navbar-end">
            <div>
              <div className="button is-white has-text-custom-purple">
                <Link to="/register">Register</Link>
              </div>
              <div className="button is-outlined is-custom-purple">
                <Link to="/login">Login</Link>
              </div>
            </div>
     </div>
     </Navbar.Menu>
    </Container>
    </Navbar>
   )
 }
 
 export default Header;
