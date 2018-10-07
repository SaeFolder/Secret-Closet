import * as React from "react";
import FashionCloud from "./FashionCloud/FashionCloud";
import * as styles from "./MainPage.scss";
import heart from 'src/assets/Love.png';

class MainPage extends React.Component {
  public render() {
    return (
			<div className={styles.MainPage}>
        <div className={styles.header}>
          <div className={styles.home}>
            SECRET CLOSET
          </div>
          <img src={heart} className={styles.heart} alt="heart" />
        </div>
        <FashionCloud/>
      </div>
    );
  }
}

export default MainPage;
