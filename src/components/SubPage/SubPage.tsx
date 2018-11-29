import * as React from "react";
import Header from "./Header/Header";
import Clothes from "./Clothes/Clothes";
import * as styles from "./SubPage.scss";
import { RouteComponentProps } from 'react-router';

class SubPage extends React.Component<RouteComponentProps<{fashion:string}>> {
  render() {    
    return (
      <div className={styles.SubPage}>
        <Header/>
        <Clothes fashion={this.props.match.params.fashion} />
      </div>
    );
  }
}

export default SubPage;
