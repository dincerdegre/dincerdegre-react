import React, { Fragment } from "react";
import classes from "./Portfolio.module.css";
import portfolioJSON from "../../../data/portfolio.json";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  return (
    <Fragment>
      <h2 className={classes.projectHeader}>My Latest Projects</h2>
      <p className={classes.projectParagraph}>Some of my recent projects</p>
      <div className={classes.projectRow}>
        {portfolioJSON.portfolio.map((portfolio) => {
          return <PortfolioItem key={portfolio.id} category={portfolio.category} title={portfolio.title} image={portfolio.image} tags={portfolio.tags} />;
        })}
      </div>
    </Fragment>
  );
};

export default Portfolio;
