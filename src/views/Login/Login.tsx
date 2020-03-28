import React from 'react';
import LoginForm from '../../components/LoginForm';
import { Card, CardContent, makeStyles, Theme, createStyles, Grid } from '@material-ui/core';

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

const Login = () => {
  const classes = useStyles();

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
            <LoginForm />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Login;
