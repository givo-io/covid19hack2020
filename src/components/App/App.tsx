import React from 'react';
// import {
//   makeStyles,
//   Theme,
//   createStyles,
// } from '@material-ui/core';
import Home from '../../views/Home';

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     grid: {
//       backgroundColor: 'purple',
//     },
//   }),
// );

const App = () => {
  // const classes = useStyles();
  // const [state, setState] = React.useState({
  //   selectedPage: 0,
  // });

  // const setSelectedPage = (clickedItemIndex: number) => {
  //   setState({
  //     ...state,
  //     selectedPage: clickedItemIndex
  //   })
  // }

  // const returnSelectedPage = () => {
  //   switch(state.selectedPage) {
  //     case 0:
  //       return 
  //   }
  // }


  const metricFixture = [
    { title: '124', subtitle: 'Completed Contributions' },
    { title: '9345', subtitle: 'Completed Contributions' },
    { title: '89.754', subtitle: 'Reached Viewers' },
  ];

  return (
    <Home metricTextData={metricFixture} />
  );
}

export default App;
