import React from 'react';
import {
  Card,
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core';
import lawn from '../../assets/lawn.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '350px',
    },
    card: {
      position: 'absolute',
      width: '350px',
      height: '412px',
      borderRadius: 20,
      background: 'linear-gradient(0deg, #FFD646, #FFD646), linear-gradient(180deg, #F4C64E 0%, #F6D993 63.54%, #FFCF29 70.31%, #FFCF29 100%)',
    },
    image: {
      position: 'relative',
      width: '403px',
      height: '403px',
      top: '48px',
      left: '-15px',
      zIndex: 10,
    }
  })
);

const OfferCard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card elevation={0} className={classes.card} />
      <img src={lawn} alt="lawn" className={classes.image} />
    </div>
  )
};

export default OfferCard;