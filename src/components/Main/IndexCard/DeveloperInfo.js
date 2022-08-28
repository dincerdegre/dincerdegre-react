import React from "react";
import classes from "./DeveloperInfo.module.css";
import { TypedDevs } from "./TypedDevs";

const DeveloperInfo = () => {
  return (
    <div>
      <h1 className={classes.firstSentence}>HI, I'M DINCER</h1>
      <TypedDevs />
      <p className={classes.lastSentence}>Developer</p>
    </div>
  );
};

export default DeveloperInfo;
