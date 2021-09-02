import React, { useState } from "react";
import { Route, BrowserRouter as Router, Switch} from "react-router-dom";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, typ) => {
    setAlert({
      msg: message,
      type: typ,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#264484";//#546790
      showAlert("Dark mode has enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode has disabled", "success");
    }
  };
  return (
    <div className="body">
      <Router>
          <Navbar mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert} />
        <Switch>
          <Route path="/about">
            <About mode={mode} />
          </Route>
          <Route path="/">
            <div className="App">
              <Textform mode={mode} showAlert={showAlert} />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
