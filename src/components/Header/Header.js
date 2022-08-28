import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import classes from './Header.module.css';

const Header = () => {
  const { pathname } = useLocation();
  const [headerChanger, setHeaderChanger] = useState(false);

  useEffect(() => {
    if (pathname === "/") {
      if (window.scrollY <= 10) {
        setHeaderChanger(false);
      }
      window.addEventListener("scroll", () => {
        setHeaderChanger(window.scrollY > 10);
      });
    } else {
      setHeaderChanger(true);
    }
  }, [headerChanger, pathname]);

  return <header className={`header ${headerChanger ? `${classes.headerColored}` : classes.headerTransparent}`}>
       <div className="container">
        <div className={classes.logoText}>
          <h1>
            <a href="/">DincerDegre</a>
          </h1>
        </div>
      </div>
    </header>;
}

export default Header;
