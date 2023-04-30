import { useState } from 'react';
import { Button} from 'react-bulma-components';
//import LogoImage from '../../assets/images/logo-white.png';
import LogoImage from '../../assets/images/logo.png';
import "../../styles/header.scss";
import UserService from '../../services/users';
import { Navigate, Link } from "react-router-dom";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faList } from '@fortawesome/free-solid-svg-icons'


function HeaderLogged() {
 const [redirectToHome, setRedirectToHome] = useState(false);

 const logOut = async () => {
    await UserService.logout();
    setRedirectToHome(true);
  }

 if (redirectToHome == true)
    return <Navigate to={{ pathname: "/" }} />

 return (
  <nav color="custom-purple" className="navbar" role="navigation" aria-label="main navigation">
  
  <div className="navbar-brand">
    <Link to="/notes">
       <img src={LogoImage} />
      </Link>

    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

      <div className="navbar-end">
      <div className="navbar-item">
      <div className="navbar-item has-dropdown is-hoverable">
        <Button className="button" color="black" outlined>
         <span>Mônica ▼</span>
        </Button>

        <div className="navbar-dropdown">
        <a className="navbar-item">
        <Link to="/users/edit">User Edit</Link>
          </a>
          <a className="navbar-item">
            <a href="#" onClick={() => logOut()}>LogOut</a>
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>

);

}


export default HeaderLogged;