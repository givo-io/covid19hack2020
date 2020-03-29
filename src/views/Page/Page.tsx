import React from 'react';
import { Grid, makeStyles, Theme, createStyles } from '@material-ui/core';
import AppBar from '../../components/AppBar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    page: {
      maxWidth: '1110px'
    },
  }),
);

const Page = (props: { children: React.ReactNode; }) => {
  const classes = useStyles();

  return (
    <Grid container justify="center">
      <Grid item className={classes.page} xs={12}>
        <Grid container direction="column">
          <AppBar />
          {props.children}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Page;