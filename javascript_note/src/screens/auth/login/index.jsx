import { Fragment } from 'react';
import Header from "../../../components/header";
import { Section, Container, Card} from 'react-bulma-components';
import LogoImage from '../../../assets/images/logo.png';
import "../../../styles/auth.scss";

const LoginScreen = () => (
 <Fragment>
   <Header/>
  <Section size="medium" className="auth">
   <Container>
    <div>
     <div size={3}>
      <Card>
       <Card.Content>

       <Section>
          <div className="has-text-centered">
            <div size={12}>
            <img src={LogoImage}/>
            </div>
          </div>

          <div className="has-text-centered">
            <div size={12}>
            <h2 size={6} className="has-text-grey has-text-centered">
              Your notes on the cloud
            </h2>
            </div>
          </div>
        </Section>
        
       </Card.Content>
      </Card>
     </div>
    </div>
   </Container>
  </Section>
 </Fragment>
);

export default LoginScreen;