import React from "react";
import classes from "./PortfolioItem.module.css";

const PortfolioItem = (props) => {
  return (
    <div className={classes.portfolioItemContainer} id={props.id}>
      <div className={classes.portfolioItem}>
        <div className={classes.portfolioItemThumb}>
          <img src={props.image} alt={props.alt} />
        </div>
        <div className={classes.portfolioItemInfo}>
          <p>{props.category}</p>
          <h4>{props.title}</h4>
          <p>{props.tags.map((item) => <span className={classes.tagsItem}>{item} </span>)}</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
