import 'bulma/css/bulma.min.css';//node_modules
import { Navbar, Container } from 'react-bulma-components';
import LogoImage from '../../assets/images/logo.png';
import '../../styles/header.scss'

function Header(){
  return(
    <Navbar>
    <Container>
      <Navbar.Brand>
        <img src={LogoImage} />
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
            Item 1
     </div>
     </Navbar.Menu>
    </Container>
    </Navbar>
   )
 }
 
 export default Header;
