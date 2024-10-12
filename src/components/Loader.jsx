/* eslint-disable no-unused-vars */
import React from "react";
import { DNA } from "react-loader-spinner";

const Loader = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
    >
      <DNA
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
  />
    </div>
  );
};

export default Loader;
