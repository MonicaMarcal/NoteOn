
import { Fragment, useState} from 'react';
import { Button,Help} from "react-bulma-components";
import { Navigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToRegister, setRedirectToRegister] = useState(false);
  const [redirectToNotes] = useState(false);
  const [error] = useState(false);


  if(redirectToRegister == true)
      return <Navigate to={{pathname: "/register"}}/>
  else if(redirectToNotes == true)
        return <Navigate to={{pathname: "/notes"}}/>

  return (
   <Fragment>
     <div className="has-text-centered">
      <form>
       <div size={12}>
       <div className="field">
         <label size="small">Email:</label>
         <div className="control">
          <input
           type="email"
           required
           name="email"
           value={email}
           onChange={e => setEmail(e.target.value)}
          />
         </div>
        </div>
        <div className="field">
         <label size="small">Password:</label>
         <div className="control">
          <input
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
          <div>
           <div>
            <a onClick={() => setRedirectToRegister(true)} className="button is-white has-text-custom-purple">Register or</a>
           </div>
           <div>
            <Button color="custom-purple" outlined>Login</Button>
           </div>
          </div>
         </div>
        </div>
        { error && <Help color="danger">Email or Password invalid</Help> }
       </div>
      </form>
     </div>
   </Fragment>
   )
 }
 
 export default LoginForm;