import React, { Fragment } from "react";
import classes from "./About.module.css";

const About = () => {
  return (
    <Fragment>
      <h2 className={classes.aboutHeader}>About Me</h2>
      <div className={classes.knowMeMore}>
        <h2>
          <span>Hi, I'm </span>Dincer Degre
        </h2>
        <p>
          I'm a Web developer. I enjoy developing simple and clean websites and
          webapps. If you want to reach me by searching my name on the
          net, you can contact me via the links below.
        </p>
        <div>
          <div className={classes.aboutRow}>
            <div className={classes.aboutItem}>
              <div className={classes.title}>Github Account:</div>
              <div className={classes.link}>
                <a
                  href="https://github.com/dincerdegre"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </div>
            </div>
            <div className={classes.aboutItem}>
              <div className={classes.title}>Medium Posts:</div>
              <div className={classes.link}>
                <a
                  href="https://medium.com/dincerdegre"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Medium
                </a>
              </div>
            </div>
            <div className={classes.aboutItem}>
            <div className={classes.title}>Linkedin Account:</div>
              <div className={classes.link}>
              <a
                href="https://www.linkedin.com/in/din%C3%A7er-de%C4%9Fre-277567185/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
              </div>
            </div>
            <div className={classes.aboutItem}>
            <div className={classes.title}>Email:</div>
              <div className={classes.link}>
              <a
                href="mailto:info@dincerdegre.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                info@dincerdegre.com
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
