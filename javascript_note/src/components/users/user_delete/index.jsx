import { useState } from 'react';
import { Button } from "react-bulma-components";
import UserService from '../../../services/users';
import { Navigate } from "react-router-dom";

function UsersDelete() {
  const [redirectToHome, setRedirectToHome] = useState(false);
 
  const deleteUser = async () => {
    if (window.confirm('Are you sure you wish to delete this account?')){
      try{
        await UserService.delete()
        setRedirectToHome(true)
      }catch(err){
          console.log("Caiu no catch")
      }
    }
   }

if(redirectToHome == true)
  return <Navigate to={{pathname: "/"}}/>

 
 return(
  <Button color="danger" onClick={() => deleteUser()}>
    Excluir conta
  </Button>
  )
}

export default UsersDelete;