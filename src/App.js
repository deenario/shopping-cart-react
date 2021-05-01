// import logo from "./logo.svg";
import "./App.css";
import CartPage from "./components/Cartpage";
import MainPage from "./components/MainPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import setAuthToken from "./components/utils/setAuthToken";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjM2MDAwMDAwMDE2MTk2NDcwMDAsInVzZXJuYW1lIjoiZGVlbmFyaW8iLCJvcmdOYW1lIjoidHJpYmUxIiwiaWF0IjoxNjE5NjQ3MDExfQ.p-F8xmSYPw1SesopGpXq0uR0VdA_oNX-TK1NAJ_ynmE";
if (token) setAuthToken(token);

const App = () => {
  return (
    <>
      {/* // <MainPage /> */}
      {/* <CartPage /> */}
      <ToastContainer />
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/add-to-cart" component={CartPage} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
};

export default App;
