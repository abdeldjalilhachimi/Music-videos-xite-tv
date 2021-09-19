import React from "react";
import dataNotFound from '../../assets/images/nodata.svg'
import './notfoundata.css'
const NotFound = () => {
  return (
    <div className="notfound">
    <h4> No Results Found!! </h4>
      <img
        src={dataNotFound}
        alt="not found image"
      />
    </div>
  );
};

export default NotFound;
