import { Fragment } from 'react';
import HeaderLogged from "../../../components/header_logged";
import UsersDelete from "../../../components/users/user_delete";
import UsersEditForm from "../../../components/users/user_edit_form";
import UsersEditPasswordForm from "../../../components/users/user_edit_password_form";


const UserEditScreen = () => (
 <Fragment>
  <HeaderLogged />

  <div className="flex flex-col items-center py-8">
      <div>   
      <h1 className="text-2xl font-bold mb-6">
        Personal Information: 
      </h1>  
       <div>
          <UsersEditForm/>
       </div>
      </div>

     <div>
     <h1 className="text-2xl font-bold mb-6">
        Change password
      </h1>
       <div>
          <UsersEditPasswordForm/>
       </div>
     </div>


    <div>
     <div>
        <UsersDelete/>
     </div>
    </div>
   </div>
 </Fragment>
);

export default UserEditScreen;
