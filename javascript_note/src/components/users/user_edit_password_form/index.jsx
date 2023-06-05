import { Fragment, useState } from 'react';
import UserService from '../../../services/users';

function UsersEditFormPassword() {
 const [password, setPassword] = useState("");
 const [password_confirmation, setPasswordConfirmation] = useState("");
 const [status, setStatus] = useState(null);

 const handleSubmit = async (evt) => {
  evt.preventDefault();

  if(password == password_confirmation){
   try {
    await UserService.updatePassword({ password: password });
    setStatus("success")
    } catch (err) {
    setStatus("error")
    }
   } else{
   setStatus("error_confirmation_password")
   }
  }

 return (
  <Fragment>
 <div className="max-w-md mx-auto bg-indigo-500 p-4 mb-4">
   <form className="bg-gray-300 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
      Password</label>
      <input
       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       type="password"
       value={password}
       onChange={e => setPassword(e.target.value)}
       required
       name="password"
      />
   </div>

   <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
       Password Confirmation
       </label>
      <input
       className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
       type="password"
       value={password_confirmation}
       onChange={e => setPasswordConfirmation(e.target.value)}
       required
       name="password_confirmation"
      />
   </div>
  
   <div className="mb-4">
   <div className="text-center lg:text-left">
   <button className="control px-12 py-2 text-lg font-medium text-center text-white bg-indigo-600 rounded-md">
      Change Password
   </button>
   </div>
   </div>
 
    {status == "error_update" &&
     <p className="help is-danger">Problem in password update</p>
    }
    {status == "error_confirmation_password" &&
     <p className="text-red-600">Password do not match</p>
    }
    {status == "success" &&
     <p className="text-green-600">Updated with success</p>
    }
   </form>
</div>
  </Fragment>
 )
}

export default UsersEditFormPassword;