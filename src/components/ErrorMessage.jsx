import React from "react";
import "./ErrorMessage.css";

const ErrorMessage = ({ error }) => {
  return (
    <div className="error">
      <p>
        Error {error.data.cod}: {error.data.message}
      </p>
    </div>
  );
};

export default ErrorMessage;
