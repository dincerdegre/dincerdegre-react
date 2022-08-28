import React from "react";
import devImage from "../../../assets/images/dev.jpg";
import classes from "./DeveloperImage.module.css";
const DeveloperImage = () => {
  return (
    <div className={classes.devImageContainer}>
      <img src={devImage} alt="Dincerdegre" />
    </div>
  );
};

export default DeveloperImage;
