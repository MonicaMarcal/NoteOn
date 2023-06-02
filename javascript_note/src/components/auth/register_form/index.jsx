import { Fragment, useState } from "react";
import { Navigate } from "react-router-dom";
import UserService from '../../../services/users';


function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [error, setError] = useState(false);

  //metodo para a submisão do formulario
  const HandleSubmit = async (evt) => {
     evt.preventDefault();
     try {
      // eslint-disable-next-line no-unused-vars
      const user = await UserService.register({name: name,email: email,password: password});
      setRedirectToLogin(true);
      } catch (error) {
      setError(true)
      }
     }
 
  if(redirectToLogin == true)
    return <Navigate to={{pathname: "/login"}}/>

  return (
    <Fragment>
   <div className="bg-gray-100 flex items-center justify-center h-screen">
   <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex items-center">
   <div className="w-1/3">
      <img src="./src/assets/images/blue.jpg" alt="Logo" className="w-full"/>
    </div>
    <div className="w-2/3 pl-8">
      <h1 className="text-2xl font-bold mb-6">Register</h1>
    <form  onSubmit={HandleSubmit}>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Name"
                  type="name"
                  required
                  name="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
         
            
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="email"
                  placeholder="Email"
                  required
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
         

            <div className="mb-6">
              <label  className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="Password"
                required
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>

            <div className="text-center lg:text-left">            
                  <p className="control">
                  <button className="control px-12 py-2 text-lg font-medium text-center text-white bg-indigo-600 rounded-md">
                      Register
                    </button>
                  </p>
                  <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                    Do have an account?
                    <a onClick={() => setRedirectToLogin(true)}> 
                      Login
                    </a>
                 </p>
                </div>
            { error &&
              <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
              <span className="font-medium">Email or Password invalid</span>
              </div>
             }
        </form>
        </div>
        </div>
        </div>
    </Fragment>
  );
}

export default RegisterForm;
