import { Fragment } from 'react';
import LoginForm from "../../../components/auth/login_form";
import Header from "../../../components/header";

const LoginScreen = () => (
 <Fragment>
   <Header/>
   <section className="h-screen">
    <div className="h-full">
    <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <LoginForm/>
     </div>
    </div>
  </section>
 </Fragment>
);

export default LoginScreen;