import * as React from "react";
import ClothesList from "./ClothesList/ClothesList";
import ClothesDetail from "./ClothesDetail/ClothesDetail";



class Clothes extends React.Component<{fashion:string}> {
  public render() {
    return (
			<div>
        <ClothesList />
        <ClothesDetail/>
      </div>
    );
  }
}

export default Clothes;
