import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function Loading({ width, height }) {
  return (
    <Loader
      type="Puff"
      color="#01bf71"
      height={height}
      width={width}
      timeout={3000} //3 secs
    />
  );
}

export default Loading;
