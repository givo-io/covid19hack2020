import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    CardMedia,
    CardContent,
    Card,
    Grid,
} from '@material-ui/core';
import FilterButton from '../FilterButton/FilterButton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      },
      details: {

      },
      content: {
          alignContent: "start"
      },
      cover: {
        width: "100%",
        height: "100%",
      },
    }),
);

const ContributionListItem = () => {
const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Grid container xs={12} className={classes.details}>
      <Grid item xs={3}>
      <CardMedia
        className={classes.cover}
        image="https://images.pexels.com/photos/2362004/pexels-photo-2362004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        title="Photography Lessons"
      />
      </Grid>
      <Grid item xs={9}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Photography Lessons
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Photography lessons for beginners
          </Typography>
          <Grid>
            <FilterButton text="Service"/>
            <FilterButton text="Photography"/>
          </Grid>
        </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ContributionListItem;