import { Fragment, useState } from 'react';
import { Button} from "react-bulma-components";
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
   <form onSubmit={handleSubmit}>
   <div className="field">
   <div className="control">
      <label className="label has-text-grey">Password</label>
      <input
       type="password"
       value={password}
       onChange={e => setPassword(e.target.value)}
       required
       name="password"
      />
     </div>
    </div>

   <div className="field">
   <div className="control">
      <label className="label has-text-grey">Password Confirmation</label>
      <input
       type="password"
       value={password_confirmation}
       onChange={e => setPasswordConfirmation(e.target.value)}
       required
       name="password_confirmation"
      />
     </div>
    </div>

    <div className="field">
    <div className="control">
    <div className=" column">
       <div className=" column has-text-right">
        <Button color="custom-purple" outlined>Update Password</Button>
       </div>
      </div>
     </div>
    </div>
    {status == "error_update" &&
     <p className="help is-danger">Problem in password update</p>
    }
    {status == "error_confirmation_password" &&
     <p className="help is-danger">Password do not match</p>
    }
    {status == "success" &&
     <p className="help is-success">Updated with success</p>
    }
   </form>
  </Fragment>
 )
}

export default UsersEditFormPassword;