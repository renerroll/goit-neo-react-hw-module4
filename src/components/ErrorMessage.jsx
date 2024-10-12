/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import classes from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => {
  return <p className={classes.error}>{message}</p>;
};

export default ErrorMessage;
