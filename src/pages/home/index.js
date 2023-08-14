import React from "react";

import style from "./home.module.scss";
import IconCard from "../../components/icon-card";
import Container from "../../components/container";
import singleImg from "../../assets/home-page/bed.png";
import chairImg from "../../assets/home-page/chair.png";
import deliveryImg from "../../assets/home-page/delivery.png";
import dinningTableImg from "../../assets/home-page/dinning-table.png";
import doubleBedImg from "../../assets/home-page/double-bed.png";
import officeTableImg from "../../assets/home-page/office-table.png";
import pcTableImg from "../../assets/home-page/pc-table.png";
import sideTableImg from "../../assets/home-page/side-table.png";
import storageImg from "../../assets/home-page/storage.png";
import woodenFloorImg from "../../assets/home-page/wooden-floor.png";
import sofaImg from "../../assets/home-page/sofa.png";
import CircularCard from "../../components/circular-card";

const HomePage = () => {
  return (
    <Container>
      <h1 className={style.heading}>All Products</h1>
      <div className={style.itemContainer}>
        {allProducts?.map((data, i) => {
          return (
            <div className={style.gridItems}>
              <IconCard title={data.title} img={data.img} />
            </div>
          );
        })}
      </div>
      <h1 className={style.heading}> Services </h1>
      <div className={style.itemContainer}>
        {allServices?.map((data, i) => {
          return (
            <div className={style.gridItems}>
              <CircularCard title={data.title} img={data.img} />
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default HomePage;

const allProducts = [
  { title: "Single Bed", img: singleImg },
  { title: "Double Bed", img: doubleBedImg },
  { title: "Sofa ", img: sofaImg },
  { title: "Office Chair", img: chairImg },
  { title: "PC Table", img: pcTableImg },
  { title: "Chair", img: chairImg },
  { title: "Side Table", img: sideTableImg },
  { title: "Dinning", img: dinningTableImg },
  { title: "Office Table", img: officeTableImg },
  { title: "Table", img: pcTableImg },
  { title: "Storage", img: storageImg },
  { title: "Accessories", img: chairImg },
];
const allServices = [
  { title: "Maintenance", img: singleImg },
  { title: "Flooring", img: woodenFloorImg },
  { title: "Fit Out ", img: sideTableImg },
  { title: "Delivery", img: deliveryImg },
];
