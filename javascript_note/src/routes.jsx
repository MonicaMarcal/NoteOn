import Home from './screens/home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const RoutesUrl = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={ <Home />} />
      </Routes>
    </Router>
  );
};
export default RoutesUrl;