import * as React from "react";
import Header from "./Header/Header";
import Clothes from "./Clothes/Clothes";

class SubPage extends React.Component {
  public render() {
    return (
			<div>
        <Header/>
        <Clothes/>
      </div>
    );
  }
}

export default SubPage;
