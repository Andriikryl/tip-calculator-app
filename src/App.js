import "./App.css";
import { Display } from "./components/Display";
import { Form } from "./components/Form";
import Logo from "../src/images/logo.svg";
function App() {
  return (
    <div className="wrapper">
      <img src={Logo} aria-hidden="true"></img>
      <div className=" container">
        <Form />
        <Display />
      </div>
    </div>
  );
}

export default App;
