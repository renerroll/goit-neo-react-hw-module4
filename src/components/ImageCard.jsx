/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import classes from "./ImageCard.module.css";

const ImageCard = ({ image, handleModal }) => {
  return (
    <div className={classes["image-card"]} onClick={() => handleModal(image)}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={classes["image"]}
      />
    </div>
  );
};

export default ImageCard;
