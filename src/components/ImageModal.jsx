/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Modal from "react-modal";
import React, { useEffect } from "react";
import classes from "./ImageModal.module.css";

function ImageModal({ isOpen, image, onRequestClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onRequestClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onRequestClose]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={classes["image-modal"]}
      overlayClassName={classes["image-modal-overlay"]}
      ariaHideApp={false}
    >
      {image && <img src={image.urls.regular} alt={image.alt_description} />}
    </Modal>
  );
}

export default ImageModal;
