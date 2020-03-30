import React from 'react';
import { Grid, Typography, Box, makeStyles, Theme, createStyles } from '@material-ui/core';
import MetricText from '../../components/MetricText';
import { MetricTextProps } from '../../types';
import Button from '../../components/Button';
import ContributionListItem from '../../components/ContributionListItem';
import CovidCard from './CovidCard';
import OfferCard from './OfferCard';

interface HomeProps {
  metricTextData?: MetricTextProps[]
}

const metricFixture = [
  { title: '124', subtitle: 'Completed Contributions' },
  { title: '9345', subtitle: 'Completed Contributions' },
  { title: '89.754', subtitle: 'Reached Viewers' },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    top: {
      height: '208px'
    },
    mid: {
      minHeight: '560px',
      paddingTop: '60px'
    },
    bottom: {
      minHeight: '186px',
      paddingTop: '60px'
    },
    welcome: {
      color: '#DD4E31',
      fontWeight: 'bold',
      fontSize: '48px',
      lineHeight: '48px',
      letterSpacing: '0.01em',
    },
    contributions: {
      [theme.breakpoints.down('md')]: {
        marginTop: '60px',
      }
    }
  }),
);

const Home = (props: HomeProps) => {
  const classes = useStyles();
  const { metricTextData = metricFixture } = props;

  return (
    <Grid container direction="column">

      <Grid container direction="column" className={classes.top}>
        <Box flexGrow={1} />
        <Typography className={classes.welcome} variant="h3">Welcome back <span role="img" aria-label="wave">👋🏻</span></Typography>
        <Box flexGrow={1} />
      </Grid>

      <Grid container justify="space-between">
        {metricTextData.map((metric, i) => (
          <Grid item key={i}>
            <MetricText title={metric.title} subtitle={metric.subtitle} />
          </Grid>
        ))}
      </Grid>


      <Grid container direction="column" className={classes.mid}>
        <Grid container justify="space-between">
          <CovidCard />
          <OfferCard />
        </Grid>
        <Box flexGrow={1} />
      </Grid>

      <Grid container justify="space-between" className={classes.contributions}>
        <Typography variant="h5">Your Contributions</Typography>
        <Button>show all contributions</Button>
      </Grid>

      <Grid container justify="center" spacing={3} className={classes.bottom}>
        <Grid item>
          <ContributionListItem />
        </Grid>
        <Grid item>
          <ContributionListItem />
        </Grid>
      </Grid>

    </Grid>
  )
}

export default Home;