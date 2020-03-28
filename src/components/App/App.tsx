import React from 'react';
import {
  makeStyles,
  Theme,
  createStyles,
  Grid
} from '@material-ui/core';
import AppBar from '../AppBar/AppBar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      backgroundColor: 'purple',
    },
  }),
);

const App = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    selectedPage: 0,
  });
  
  const setSelectedPage = (clickedItemIndex: number) => {
    setState({
      ...state,
      selectedPage: clickedItemIndex
    })
  }

  const returnSelectedPage = () => {
    switch(state.selectedPage) {
      case 0:
        return 
    }
  }

  return (
    <Grid container className={classes.grid}>
      <AppBar/>
      {returnSelectedPage()}
    </Grid>
  );
}

export default App;
