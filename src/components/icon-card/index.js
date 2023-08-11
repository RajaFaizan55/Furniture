import React, { useState } from "react";

import style from "./card.module.scss";
import ico from "../../assets/home-page/bed.png";

const IconCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div
      className={`${style.container} ${isHovered ? style.zoomIn : ""}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <img src={ico} />
      <h3>Bed</h3>
    </div>
  );
};

export default IconCard;
