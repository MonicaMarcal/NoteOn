import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomeScreen from './screens/home';
import RegisterScreen from './screens/auth/register'
import LoginScreen from './screens/auth/login'
import NotesIndexScreen from './screens/notes/index'
import UserEditScreen from './screens/users/edit'

import PrivateRoute from './components/private_route';



const RoutesUrl = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={ <HomeScreen />} />
      <Route path="/register" element={ <RegisterScreen />} />
      <Route path="/login" element={ <LoginScreen />} />
      <Route element={<PrivateRoute />}>
        <Route exact path="/notes" element={ <NotesIndexScreen/> } />
        <Route exact path="/users/edit" element={ <UserEditScreen/> } />
      </Route>
      </Routes>
    </Router>
  );
};


export default RoutesUrl;