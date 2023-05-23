import { Fragment } from 'react';
import { Card, Container, Heading, Section } from "react-bulma-components";
import HeaderLogged from "../../../components/header_logged";
import UsersDelete from "../../../components/users/user_delete";
import UsersEditForm from "../../../components/users/user_edit_form";
import UsersEditPasswordForm from "../../../components/users/user_edit_password_form";


const UserEditScreen = () => (
 <Fragment>
  <HeaderLogged />
  <Section size="medium" className="users ">
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
