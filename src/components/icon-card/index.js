import React, { useState } from "react";

import style from "./card.module.scss";

const IconCard = ({ title, img }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div
      className={`${style.container} `}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <img
        src={img}
        alt="item img"
        width={60}
        className={`${isHovered ? style.zoomIn : ""}`}
      />
      <h3>{title}</h3>
    </div>
  );
};

export default IconCard;
