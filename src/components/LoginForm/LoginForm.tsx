import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import {
  FormControl,
  InputLabel,
  Input,
  Grid,
  Button,
  Box,
  Link,
  Divider,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
    },
  }),
);

const LoginForm = (props: any) => {
  const [state, setState] = React.useState({
    username: '',
    password: '',
  });
  const [submit, setSubmit] = React.useState(false);
  const classes = useStyles();

  const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setSubmit(true);
    if (state.username && state.password) {
      props.toHome();
    }
  }

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl fullWidth error={submit && !state.username}>
            <InputLabel htmlFor="username">Username</InputLabel>
            <Input type="text" name="username" id="username" value={state.username} onChange={handleChange} />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth error={submit && !state.password}>
            <InputLabel htmlFor="pwd">Password</InputLabel>
            <Input type="password" id="pwd" name="password" value={state.password} onChange={handleChange} />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Grid container alignItems="center">
            <Box flexGrow={1}>
              <Link href="#" onClick={preventDefault} color="textSecondary" variant="body2">forgot password?</Link>
            </Box>
            <Button variant="contained" color="primary" type="submit">Submit</Button>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center">
            <Link href="#" onClick={preventDefault} color="textSecondary" variant="body1">create account</Link>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginForm;