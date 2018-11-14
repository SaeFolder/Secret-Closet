import * as React from "react";
import * as styles from "./ClothesList.scss";
import list_1 from "assets/list_1.jpg";
import list_2 from "assets/list_2.jpg";
import list_3 from "assets/list_3.jpeg";

class ClothesList extends React.Component {
  public render() {
    return (
			<div>
        <div className={styles.listbox}>
          <div className={styles.imgbox}>
            <div className={styles.leftbutton}/>
            <img src={list_1} className={styles.list_1} alt="list_1" />
            <img src={list_2} className={styles.list_2} alt="list_2" />
            <img src={list_3} className={styles.list_3} alt="list_3" />
            <div className={styles.rightbutton}/>
          </div>
        </div>
      </div>
    );
  }
}

export default ClothesList;
