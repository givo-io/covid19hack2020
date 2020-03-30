import React from 'react';
import LoginForm from '../../components/LoginForm';
import { Card, CardContent, makeStyles, Theme, createStyles, Grid } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 'fill-available',
    },
    card: {
      maxWidth: '440px',
    },
  }),
);

const Login = (props: any) => {
  const classes = useStyles();

  const toHome = () => {
    props.history.push('/');
  };

  return (
    <Grid
      container
      alignContent="center"
      alignItems="center"
      justify="center"
      direction="column"
      className={classes.root}
    >
      <Grid item>
        <Card className={classes.card}>
          <CardContent>
            <LoginForm toHome={toHome} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default withRouter(Login);
