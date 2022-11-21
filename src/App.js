import { Route, Switch } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./App.css";
import Crud from "./crud/Crud";
import FormHome from "./form/FormHome";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/crud" component={Crud} />
        <Route path="/form" component={FormHome} />
      </Switch>
    </div>
  );
}

export default App;
