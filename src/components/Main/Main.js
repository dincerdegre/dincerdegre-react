import React, { Fragment } from "react";
import IndexCard from './IndexCard/IndexCard';
import Portfolio from './Portfolio/Portfolio';
import classes from './Main.module.css';
import About from "./About/About";

const Main = () => {
  return (
    <Fragment>
      <section className={classes.indexCard}>
      <div className={`container`}>
          <IndexCard />
      </div>
      </section>
      <section className={classes.portfolioCard}>
        <div className="container">
          <Portfolio />
        </div>
      </section>
      <section className={classes.aboutCard}>
        <div className="container">
          <About />
        </div>
      </section>
    </Fragment>
  );
};

export default Main;
