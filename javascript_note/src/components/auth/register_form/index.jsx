import { Fragment, useState } from "react";
import { Button, Help } from "react-bulma-components";
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
    <form  onSubmit={HandleSubmit}>
        <div className="field">
            <label className="label">Name</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Name"
                  type="name"
                  required
                  name="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
            </div>
            
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className="input"
                  type="email"
                  placeholder="Email"
                  required
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Password</label>
              <input
                className="input"
                type="password"
                placeholder="Password"
                required
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </div>

            <div className="field">
              <div className="control">
                <div className="field is-grouped">
                  <p className="control">
                    <a onClick={() => setRedirectToLogin(true)} className="button is-white has-text-custom-purple">
                      Login or
                    </a>
                  </p>
                  <p className="control">
                    <Button color="custom-purple" outlined>
                      Register
                    </Button>
                  </p>
                </div>
              </div>
            </div>
            { error && <Help color="danger">Email or Password invalid</Help> }
        </form>
    </Fragment>
  );
}

export default RegisterForm;
