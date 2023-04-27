import { Fragment } from 'react';
import Header from "../../../components/header";
import { Section, Container, Card} from 'react-bulma-components';
import LogoImage from '../../../assets/images/logo.png';
import "../../../styles/auth.scss";
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
                       <img src={LogoImage}/>
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