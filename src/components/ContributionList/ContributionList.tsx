import React from 'react';
import { createStyles, Theme, makeStyles, fade } from '@material-ui/core/styles';
import Button from '../Button/Button';
import ContributionListItem from '../ContributionListItem/ContributionListItem';
import {
  Typography,
  Grid,
  TextField
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center',
      alignSelf: 'center',
      backgroundColor: theme.palette.background.paper,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    contributions: {
      marginTop: '60px',
      [theme.breakpoints.down('md')]: {
        marginTop: '60px',
      }
    },
    welcome: {
      color: '#DD4E31',
      fontWeight: 'bold',
      fontSize: '48px',
      lineHeight: '48px',
      letterSpacing: '0.01em',
    },
    bottom: {
      minHeight: '186px',
      paddingTop: '60px'
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      marginTop: 60,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    inputInput: {
      width: "100%",

    }
  }),
);

const ContributionList = () => {
  const classes = useStyles();

  const [offers, setOffers] = React.useState(2);

  const addOffer = () => {
    setOffers(offers+1);
  }

  const getOffers = () => {
    const list = [];
    for (let i=0; i<offers; i++) {
      list.push(
        <Grid item>
          <ContributionListItem />
        </Grid>
      )
    }
    return list;
  }

  return (
    <Grid container direction="column">

      <Grid className={classes.search}>
        <Grid item xs={12}>
          <TextField id="outlined-basic" label="🔎 Search..." variant="outlined" className={classes.inputInput} />
        </Grid>
      </Grid>

      <Grid container justify="space-between" className={classes.contributions}>
        <Grid item direction="column">
          <Typography variant="h5">Your Contributions</Typography>
          <Typography variant="subtitle2">Review and manage your contributions</Typography>
        </Grid>

        <Button onClick={addOffer}>ADD CONTRIBUTION</Button>
      </Grid>

      <Grid container justify="center" spacing={3} className={classes.bottom}>
        {getOffers()}
      </Grid>
    </Grid>
  );
};

export default ContributionList;