import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import LoginScreen from './screens/auth/login';
import RegisterScreen from './screens/auth/register';
import HomeScreen from './screens/home';
import NotesIndexScreen from './screens/notes/index';
import UserEditScreen from './screens/users/edit';

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