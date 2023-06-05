import { Fragment } from 'react';
import RegisterForm from "../../../components/auth/register_form";
import Header from "../../../components/header";


const RegisterScreen = () => (
 <Fragment>
   <Header/>
   <section className="h-screen">
   <div className="h-full">
   <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
        <RegisterForm/>
    </div>
    </div>
    </section>
 </Fragment>
);

export default RegisterScreen;