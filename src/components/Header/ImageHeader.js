import React from "react";
import main from "../../images/main.png";
import "../../index.css";

const ImageHeader = () => {
  return (
    <>
      <div className="container-img-main">
        <img
          className="img-main"
          src={main}
          alt={main}
          height="20%"
          width="100%"
        />
        <div className="overlay">
          <div className="text-main">Electronics</div>
        </div>
      </div>
    </>
  );
};

export default ImageHeader;
