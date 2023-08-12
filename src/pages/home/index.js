import React from "react";

import style from "./home.module.scss";
import IconCard from "../../components/icon-card";
import Container from "../../components/container";
import sampleImg from "../../assets/home-page/bed.png";

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
              <IconCard title={data.title} img={data.img} />
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default HomePage;

const allProducts = [
  { title: "Single Bed", img: sampleImg },
  { title: "Double Bed", img: sampleImg },
  { title: "Sofacum Bed ", img: sampleImg },
  { title: "Office Chair", img: sampleImg },
  { title: "PC Table", img: sampleImg },
  { title: "Chair", img: sampleImg },
  { title: "Side Table", img: sampleImg },
  { title: "Dinning", img: sampleImg },
  { title: "Office Table", img: sampleImg },
  { title: "Table", img: sampleImg },
  { title: "Storage", img: sampleImg },
  { title: "Accessories", img: sampleImg },
];
const allServices = [
  { title: "Maintenance", img: sampleImg },
  { title: "Flooring", img: sampleImg },
  { title: "Fit Out ", img: sampleImg },
  { title: "Delivery", img: sampleImg },
];
