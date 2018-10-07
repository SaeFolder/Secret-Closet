import * as React from "react";
import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import SubPage from "./components/SubPage/SubPage";
import { BrowserRouter as Router, Route} from 'react-router-dom';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div>
          <Route exact={true} path="/" component={MainPage}/>
          <Route exact={true} path="/sub" component={SubPage}/>
        </div>
      </Router>
    );
  }
}

export default App;
