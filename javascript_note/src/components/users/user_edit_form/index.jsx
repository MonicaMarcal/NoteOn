import { Fragment, useEffect, useState } from 'react';
import UserService from '../../../services/users';

function UsersEditForm() {
 const [email, setEmail] = useState("");
 const [name, setName] = useState("");
 const [status, setStatus] = useState(null);

 const initializeUser = async () => {
  const user = await JSON.parse(localStorage.getItem('user'));
  setName(user['name']);
  setEmail(user['email']);
  }

 useEffect(() =>{
  initializeUser()
  }, [])

 const handleSubmit = async (evt) => {
  evt.preventDefault();

  try {
   await UserService.update({ email: email, name: name });
   setStatus("success")
   } catch (err) {
   setStatus("error")
   }
  }

 return (
  <Fragment>
  <div className="max-w-md mx-auto bg-indigo-500 p-4 mb-4">
   <form className="bg-gray-300 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
    <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
    Full Name</label>
      <input
       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       type="name"
       value={name || ""}
       onChange={e => setName(e.target.value)}
       required
       name="name"
      />
     </div>
   
    <div className="mb-6">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
      Email</label>
      <input
       className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
       type="email"
       value={email || ""}
       onChange={e => setEmail(e.target.value)}
       required
       name="email"
      />
     </div>


     <div className="mb-4">
     <div className="text-center lg:text-left">
       <button className="control px-12 py-2 text-lg font-medium text-center text-white bg-indigo-600 rounded-md">
          Update
        </button>
       </div>
      </div>
 
    {status == "error" &&
      <p className="text-red-600">Problem in update</p>
    }
    {status == "success" &&
     <p className="text-green-600">Updated with success</p>
    }
   </form>

  </div>
  </Fragment>
 )
}

export default UsersEditForm;