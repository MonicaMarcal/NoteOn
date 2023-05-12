
import { Fragment, useState} from 'react';
import { Button,Help, Section} from "react-bulma-components";
import { Navigate } from "react-router-dom";
import UserService from '../../../services/users';

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToRegister, setRedirectToRegister] = useState(false);
  const [redirectToNotes, setRedirectToNotes] = useState(false);
  const [error, setError] = useState(false);

  const HandleSubmit = async (evt) => {
      evt.preventDefault();
   
      try {
      await UserService.login({email: email,password: password});
        setRedirectToNotes(true);
        } catch (error) {
        setError(true)
        }
     }

     

  if(redirectToRegister == true)
      return <Navigate to={{pathname: "/register"}}/>
  else if(redirectToNotes == true)
        return <Navigate to={{pathname: "/notes"}}/>

  return (
   <Fragment>
   <Section size="small" className="home">
      <form onSubmit={HandleSubmit}>
       <div className="field">
         <label className="label">Email:</label>
         <div className="control">
          <input
          className="input"
           type="email"
           required
           name="email"
           value={email}
           onChange={e => setEmail(e.target.value)}
          />
         </div>
        </div>
        <div className="field">
         <label className="label">Password:</label>
         <div className="control">
          <input
          className="input"
           type="password"
           required
           name="password"
           value={password}
           onChange={e => setPassword(e.target.value)}
          />
         </div>
        </div>
        <div className="field">
        <div className="control">
          <div className="field is-grouped">
            <p className="control">
              <a onClick={() => setRedirectToRegister(true)} className="button is-white has-text-custom-purple">Register or</a>
            </p>
            <p className="control">
            <Button color="custom-purple" outlined>Login</Button>
           </p>
          </div>
         </div>
        </div>
        { error && <Help color="danger">Email or Password invalid</Help> }
       </form>
     </Section>
   </Fragment>
   )
 }
 
 export default LoginForm;