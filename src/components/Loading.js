import React from "react";

const Loading = ({ icon }) => {
  return (
    <div className="Phone_Content_Loading">
      <i className={`em ${icon}`}></i>
    </div>
  );
};

export default Loading;
