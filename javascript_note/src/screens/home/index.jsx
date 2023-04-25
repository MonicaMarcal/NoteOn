import { Fragment } from 'react';
import PresentationImage from '../../assets/images/presentation.png';
import Header from "../../components/header";
import { Section,Container,Heading} from 'react-bulma-components';
import "../../styles/home.scss";
import { Link } from 'react-router-dom';


const HomeScreen = () => (
 <Fragment>
    <Header/>
    <Section size="medium" className="home">
      <Container>
      <div className="columns">
              <div size={5}>
                  <Heading size={2} spaced className="has-text-white">
                      Create notes easily and access when you wants on the cloud
                  </Heading>
                  <Heading size={5} spaced className="has-text-light" subtitle>
                      Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.<br/><br/>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print.
                  </Heading>
                    <Link to="/register" className="button is-outlined is-white is-large">
                          <strong>Register for free Nowstrong</strong>
                    </Link>
              </div>

              <div size={6} offset={1}>
                  <img src={PresentationImage} />
              </div>

        </div>
      </Container>
  </Section>
 </Fragment>
)

export default HomeScreen;