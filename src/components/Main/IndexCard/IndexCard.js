import React from 'react';
import classes from './IndexCard.module.css';
import DeveloperImage from './DeveloperImage';
import DeveloperInfo from './DeveloperInfo';

const IndexCard = () => {
  return (
    <div className='row align-items-center'>
      <div className={classes.cardImageColumn}><DeveloperImage /></div>
      <div className={classes.cardInfoColumn}><DeveloperInfo /></div>
    </div>
  )
}

export default IndexCard;
