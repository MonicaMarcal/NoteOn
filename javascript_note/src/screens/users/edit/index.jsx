import { Fragment } from 'react';
import { Section, Heading, Container, Card } from "react-bulma-components";
import "../../../styles/users.scss";
import HeaderLogged from "../../../components/header_logged";


const UserEditScreen = () => (
 <Fragment>
  <HeaderLogged />
  <Section size="medium" className="users">
   <Container>
    <div className="users-edit centered">
     <div size={4}>
      <Heading size={5} className="has-text-grey has-text-left">
        Informações Pessoais
      </Heading>
      <Card>
       <Card.Content>
         Users Edit Form...
       </Card.Content>
      </Card>
     </div>
    </div>

    <div className="users-edit centered">
     <div size={4}>
      <Heading size={5} className="has-text-grey has-text-left">
        Password
      </Heading>
      <Card>
       <Card.Content>
        Users Edit Password Form...
       </Card.Content>
      </Card>
     </div>
    </div>
    <div className="centered">
     <div size={4} className="has-text-right">
      Users Delete Button...
     </div>
    </div>
   </Container>
  </Section>
 </Fragment>
);

export default UserEditScreen;
