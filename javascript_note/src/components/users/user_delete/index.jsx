import { useState } from 'react';
import { Navigate } from "react-router-dom";
import UserService from '../../../services/users';

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
  <div className="flex justify-center mt-4">
  <button className="control px-12 py-2 text-lg font-medium text-center text-white bg-red-600 rounded-md"
      onClick={() => deleteUser()}>
      Excluir conta
    </button>
  </div>
 
  )
}

export default UsersDelete;