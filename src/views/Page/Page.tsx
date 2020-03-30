import React from 'react';
import { Grid, makeStyles, Theme, createStyles } from '@material-ui/core';
import AppBar from '../../components/AppBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "../Home";
import Login from "../Login";
import ContributionList from '../../components/ContributionList';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    page: {
      maxWidth: '1110px'
    },
  }),
);

/**
 * These routes render within the Page container
 */
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/contributions">
        <ContributionList />
      </Route>
      <Route path="/messages">
        <Home />
      </Route>
      <Route path="/">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

const Page = (props: any) => {
  const classes = useStyles();

  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Grid container justify="center">
            <Grid item className={classes.page} xs={12}>
              <Grid container direction="column">
                <AppBar />
                <Routes />
              </Grid>
            </Grid>
          </Grid>
        </Route>
      </Switch>
    </Router>
  )
}

export default Page;