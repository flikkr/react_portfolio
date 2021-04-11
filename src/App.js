import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./pages/Intro.js";
import "./pages/Map.js";

function App() {
  return (
    <Router>
      <Route path='/' component={Intro}></Route>
      <Route path='/story' component={Map}></Route>
    </Router>
  );
}

export default app;
