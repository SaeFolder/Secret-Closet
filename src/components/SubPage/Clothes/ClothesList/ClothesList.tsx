import * as React from "react";
import * as styles from "./ClothesList.scss";
import list_1 from "assets/list_1.jpg";
import list_2 from "assets/list_2.jpg";
import list_3 from "assets/list_3.jpeg";

export interface ClothesListState {
  img: Array<any>,
  index: number
}

class ClothesList extends React.Component<{},ClothesListState> {
  constructor(props:{}) {
    super(props);
    this.state = {
      img: [list_1, list_2, list_3, list_1, list_2, list_3, list_1, list_2, list_3, list_1, list_2, list_3, list_1, list_2, list_3],
      index: 0
    }
  }

   leftClick = () => {

    if (this.state.index != 0) {
      this.setState({
        img: this.state.img,
        index: this.state.index - 1
      })
    }
  }
  rightClick = () => {
    const { index, img } = this.state
    if (index != img.length - 3) {
      this.setState({
        img: this.state.img,
        index: index + 1
      })
    }
  }

  public render() {
    let {index} = this.state;
    return (
			<div>
        <div className={styles.listbox}>
          <div className={styles.imgbox}>
            <div onClick={this.leftClick} className={styles.leftbutton}/>
              <img src={this.state.img[index + 0]} className={styles.list_1} alt="list_1" />
              <img src={this.state.img[index + 1]} className={styles.list_2} alt="list_2" />
              <img src={this.state.img[index + 2]} className={styles.list_3} alt="list_3" />
            <div onClick={this.rightClick} className={styles.rightbutton}/>
          </div>
        </div>
      </div>
    );
  }

}

export default ClothesList;
