import * as React from "react";
import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import SubPage from "./components/SubPage/SubPage";
import { BrowserRouter as Router, Route} from 'react-router-dom';

// const Test = (props:RouteComponentProps<{fashion:string}>) => {
//   return (
//     <h1>{props.match.params.fashion}</h1>
//   )
// }

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div>
          <Route exact={true} path="/" component={MainPage}/>
          <Route path="/:fashion" component={SubPage}/>
        </div>
      </Router>
    );
  }
}


export default App;
