/* eslint-disable react/prop-types */
import ImageCard from "./ImageCard";
import classes from "./ImageGallery.module.css";

const ImageGallery = ({ images, handleModal }) => {
  return (
    <ul className={classes["image-gallery"]}>
      {images.map(({ id, ...image }) => (
        <li key={id} className={classes["image-gallery-item"]}>
          <ImageCard image={image} handleModal={handleModal} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
