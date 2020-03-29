import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  CardMedia,
  CardContent,
  Card,
  Grid,
  Box,
} from '@material-ui/core';
import FilterButton from '../FilterButton/FilterButton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '150px',
      width: '540px',
      display: 'flex',
      borderRadius: 20
    },
    cover: {
      width: '200px',
    },
    grid: {
      height: 'fill-available'
    }
  }),
);

const ContributionListItem = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image="https://images.pexels.com/photos/2362004/pexels-photo-2362004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        title="Photography Lessons"
      />
      <CardContent>
        <Grid container direction="column" className={classes.grid}>
          <Typography component="h5" variant="h5">
            Photography Lessons
            </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Photography lessons for beginners
            </Typography>
          <Box flexGrow={1} />
          <Grid container>
            <FilterButton variant="outlined">Service</FilterButton>
            <FilterButton variant="outlined">Photography</FilterButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ContributionListItem; 