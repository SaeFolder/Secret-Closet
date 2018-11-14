import * as React from "react";
import Header from "./Header/Header";
import Clothes from "./Clothes/Clothes";
import * as styles from "./SubPage.scss";

class SubPage extends React.Component {
  public render() {
    return (
			<div className={styles.SubPage}>
        <Header/>
        <Clothes/>
      </div>
    );
  }
}

export default SubPage;
