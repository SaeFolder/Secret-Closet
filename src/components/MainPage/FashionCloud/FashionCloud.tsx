import * as React from "react";
import * as styles from "./FashionCloud.scss";
import { Link } from 'react-router-dom';

class FashionCloud extends React.Component {
  public render() {
    return (
			<div>
        <div className={styles.cloudbox}>
          <div className={styles.cloudbox_2}/>
          <div className={styles.feminine}>
            <Link to="/FEMININE">FEMININE</Link>
          </div>
          <div className={styles.colorbox_1}/>
          <div className={styles.pair}>
            <Link to="/PAIR">PAIR</Link>
          </div>
          <div className={styles.dandy}>
          <Link to="/DANDY">DANDY</Link>
          </div>
          <div className={styles.casual}>
          <Link to="/CASUAL">CASUAL</Link>
          </div>
          <div className={styles.vintage}>
          <Link to="/VINTAGE">VINTAGE</Link>
          </div>
          <div className={styles.retro}>
          <Link to="/RETRO">RETRO</Link>
          </div>
          <div className={styles.colorbox_2}/>
          <div className={styles.simple}>
          <Link to="/SIMPLE">SIMPLE</Link>
          </div>
          <div className={styles.colorbox_3}/>
          <div className={styles.colorbox_4}/>
          <div className={styles.modern}>
          <Link to="/MODERN">MODERN</Link>
          </div>
          <div className={styles.classic}>
            <Link to="/CLASSIC">CLASSIC</Link>
          </div>
          <div className={styles.sporty}>
            <Link to="/SPORTY">SPORTY</Link>
          </div>
          <div className={styles.office}>
            <Link to="/OFFICE">OFFICE</Link>
          </div>
          <div className={styles.layered}>
            <Link to="/LAYERED">LAYERED</Link>
          </div>
          <div className={styles.colorbox_5}/>
          <div className={styles.min}>
            <Link to="/MIN">MIN</Link>
          </div>
          <div className={styles.max}>
            <Link to="/MAX">MAX</Link>
          </div>
          <div className={styles.street}>
            <Link to="/STREET">STREET</Link>
          </div>
          <div className={styles.hiphop}>
           <Link to="/HIPHOP">HIPHOP</Link>
          </div>
          <div className={styles.colorbox_6}/>
          <div className={styles.ethnic}>
            <Link to="/ETHNIC">ETHNIC</Link>
          </div>
        </div>
        
        <div className={styles.text}>
          JUST CLICK YOUR STYLE
        </div>
      </div>
    );
  }
}

export default FashionCloud;
