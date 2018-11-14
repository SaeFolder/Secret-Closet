import * as React from "react";
import * as styles from "./ClothesDetail.scss";
import detail from "src/assets/detail.png";

class ClothesDetail extends React.Component {
  public render() {
    return (
			<div>
        <div className={styles.box}>
          <div className={styles.detail_box}>
            <div className={styles.img_box}>
              <div className={styles.leftbutton}/>
              <img src={detail} className={styles.detail} alt="detail"/>
              <div className={styles.rightbutton}/>
            </div>
            <div className={styles.text_box}>
              <div className={styles.p1}>
                Strawberry Drink
              </div>
              <div className={styles.p2}>
                Yejin's Closet
              </div>
              <div className={styles.p3}>
                Red Jacket<br/>
                Wide Jean<br/>
                White Free T-shirt
              </div>
              <div className={styles.p4}>
                안녕하세요, 이 옷은 영국에서 시작되어<br/>
                태평양을 지나 한국에 도착해<br/>
                김아무개라는 사람을 통해<br/>
                널리 전파된 세상에서 제일가는 존나 멋진<br/>
                개 깐지나는 옷이랍니다. 모두들 이런 옷이<br/>
                가득해 넘쳐버리는 제 샵에 놀러오도록 하시죠.
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default ClothesDetail;
