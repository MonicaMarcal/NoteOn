import { Fragment } from 'react';
import { Section, Heading, Container, Card } from "react-bulma-components";
import "../../../styles/users.scss";
import HeaderLogged from "../../../components/header_logged";
import UsersEditForm from "../../../components/users/user_edit_form";
import UsersEditPasswordForm from "../../../components/users/user_edit_password_form"
import UsersDelete from "../../../components/users/user_delete";

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
          <UsersEditForm/>
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
          <UsersEditPasswordForm/>
       </Card.Content>
      </Card>
     </div>
    </div>
    <div className="centered">
     <div size={4} className="has-text-right">
        <UsersDelete/>
     </div>
    </div>
   </Container>
  </Section>
 </Fragment>
);

export default UserEditScreen;
