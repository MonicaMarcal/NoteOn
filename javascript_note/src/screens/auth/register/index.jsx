import { Fragment } from 'react';
import { Card, Container, Section } from 'react-bulma-components';
import Header from "../../../components/header";
//import LogoImage from '../../../assets/images/logo.png';
import RegisterForm from "../../../components/auth/register_form";


const RegisterScreen = () => (
 <Fragment>
   <Header/>
    <Section size="medium" className="auth">
      <Container>
        <div>
          <div size={3}>
          <Card>
            <Card.Content>
              <Section>
                <div>
                  <div size={12}  className="has-text-centered">
                       {/* <img src={LogoImage}/> */}
                  </div>
                  <div size={12}  className="has-text-centered">
                      <h2 size={6} className="has-text-grey has-text-centered">
                        Your notes on the cloud
                      </h2>
                  </div>
                  </div>
                <RegisterForm/>
              </Section>
              </Card.Content>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
 </Fragment>
);

export default RegisterScreen;