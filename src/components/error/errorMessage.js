import React from "react";
import img from "./error.gif";

const ErrorMessage = () => {
  return (
    <div className="text-center random-block">
      <img src={img} alt="error" />
      <span>Oops! Something went wrong :(</span>
    </div>
  );
};
export default ErrorMessage;
