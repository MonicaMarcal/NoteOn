/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link, Navigate } from "react-router-dom";
import UserService from '../../services/users';



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
  <div className="bg-indigo-600 text-white sticky top-0 z-10">
     <nav className="max-w-4xl mx-auto p-4 flex justify-between items-center">
       <Link to="/notes">
         <h1 className="text-3xl font-medium">
           📄 NoteOn
         </h1>
       </Link>

        <div className="navbar-end">
          <div className="navbar-item has-dropdown is-hoverable">
            <button className="text-gray-800">
              <span>{JSON.parse(user)['name']} ▼ </span>
            </button>

            <div className="navbar-dropdown">
            
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-md">
            <a onClick={() => props.setIsOpen(true)} className="navbar-item">
              <FontAwesomeIcon icon={faList} /> Notes
            </a>
            </button>

              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 m-1 rounded-md">
                  <a className="navbar-item">
                      <Link to="/users/edit">User Edit</Link>
                  </a>
              </button>

              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-md">
                  <a href="#" onClick={() => logOut()}>LogOut</a>
              </button>
              
            </div>
          </div>
        </div>
      </nav>
    </div>
);

}


export default HeaderLogged;