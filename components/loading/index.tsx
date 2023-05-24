import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Loading = ({
  height = 60,
  width = 60,
  wrapperClasses,
}: {
  height?: number;
  width?: number;
  wrapperClasses?: string;
}) => {
  return (
    <div
      className={
        wrapperClasses
          ? wrapperClasses
          : "d-flex justify-content-center align-items-center vh-75"
      }
    >
      <FontAwesomeIcon icon={faSpinner} width={width} height={height} />
    </div>
  );
};

export default Loading;
