import { Fragment, useState, useEffect } from 'react';
import { Button,Help } from "react-bulma-components";
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
   <form onSubmit={handleSubmit}>
   <div className="field">
   <div className="control">
   <label className="label has-text-grey">Full Name</label>
      <input
       type="name"
       value={name || ""}
       onChange={e => setName(e.target.value)}
       required
       name="name"
      />
     </div>
    </div>

    <div className="field">
    <div className="control">
    <label className="label has-text-grey">Email</label>
      <input
       type="email"
       value={email || ""}
       onChange={e => setEmail(e.target.value)}
       required
       name="email"
      />
     </div>
    </div>

    <div className="field">
    <div className="control">
    <div className=" column">
       <div className=" column has-text-right">
        <Button color="custom-purple" outlined>Update</Button>
       </div>
      </div>
     </div>
    </div>
    {status == "error" &&
     <Help color="danger">Problem in update</Help>
    }
    {status == "success" &&
     <Help color="primary">Updated with success</Help>
    }
   </form>
  </Fragment>
 )
}

export default UsersEditForm;