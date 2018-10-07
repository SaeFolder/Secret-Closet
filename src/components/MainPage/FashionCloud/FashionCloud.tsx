import * as React from "react";
import * as styles from "./FashionCloud.scss";

class FashionCloud extends React.Component {
  public render() {
    return (
			<div>
        <div className={styles.cloudbox}>
          <div className={styles.feminine}>
            FEMININE
          </div>
          <div className={styles.colorbox_1}/>
          <div className={styles.pair}>
            PAIR
          </div>
          <div className={styles.dandy}>
            DANDY
          </div>
          <div className={styles.casual}>
            CASUAL
          </div>
          <div className={styles.vintage}>
            VINTAGE
          </div>
          <div className={styles.retro}>
            RETRO
          </div>
          <div className={styles.colorbox_2}/>
          <div className={styles.simple}>
            SIMPLE
          </div>
          <div className={styles.colorbox_3}/>
          <div className={styles.colorbox_4}/>
          <div className={styles.modern}>
            MODERN
          </div>
          <div className={styles.classic}>
            CLASSIC
          </div>
          <div className={styles.sporty}>
            SPORTY
          </div>
          <div className={styles.office}>
            OFFICE
          </div>
          <div className={styles.layered}>
            LAYERED
          </div>
          <div className={styles.colorbox_5}/>
          <div className={styles.min}>
            MIN
          </div>
          <div className={styles.max}>
            MAX
          </div>
          <div className={styles.street}>
            STREET
          </div>
          <div className={styles.hiphop}>
            HIPHOP
          </div>
          <div className={styles.colorbox_6}/>
          <div className={styles.ethnic}>
            ETHNIC
          </div>
        </div>
        <div className={styles.cloudbox_2}/>
        <div className={styles.text}>
          JUST CLICK YOUR STYLE
        </div>
      </div>
    );
  }
}

export default FashionCloud;
