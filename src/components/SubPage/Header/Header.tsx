import * as React from "react";
import * as styles from "./Header.scss";

class Header extends React.Component {
  public render() {
    return (
      <div className={styles.container}>
        <div className={styles.menubox}>
          <div className={styles.menulist}>
            <div className={styles.menutxt}>MENU</div>
            <div className={styles.menutxt}>MENU</div>
            <div className={styles.menutxt}>MENU</div>
            <div className={styles.menutxt}>*</div>
          </div>
        </div>
        <div className={styles.mainheader}>
          <div className={styles.bigtitle}>
            <div className={styles.rectangular1}>
              <div className={styles.rectangular2}>
                <div className={styles.secloset}>
                  SECRET CLOSET
                </div>
              </div>
            </div>
          </div>
          <div className={styles.smalltitle}>
            JUST CLICK YOUR STYLE
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
