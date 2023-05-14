import { useState } from 'react';
import { Button} from 'react-bulma-components';
//import LogoImage from '../../assets/images/logo.png';
import "../../styles/header.scss";
import UserService from '../../services/users';
import { Navigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'


function HeaderLogged(props) {
 const [redirectToHome, setRedirectToHome] = useState(false);
 const[user] = useState(localStorage.getItem('user'))

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
       {/* <img src={LogoImage} /> */}
      </Link>
      
      <a
         className="navbar-burger burger"
         aria-label="menu"
         aria-expanded="false"
         data-target="navbar-menu">
         <span aria-hidden="true"></span>
         <span aria-hidden="true"></span>
         <span aria-hidden="true"></span>
     </a>

  </div>

      <div className="navbar-end">

     {/*botão sidebar*/}
      <nav className="navbar-item navbar-start">
        <a className="navbar-item">
          <Button
          className="open-button"
          color="black"
          outlined
          // eslint-disable-next-line react/prop-types
          onClick={() => props.setIsOpen(true)}>
            <FontAwesomeIcon icon={faList} />
          </Button>
        </a>
      </nav>

      <div className="navbar-item">
      <div className="navbar-item has-dropdown is-hoverable">
        <Button className="button" color="black" outlined>
          <span>{JSON.parse(user)['name']} ▼ </span>
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