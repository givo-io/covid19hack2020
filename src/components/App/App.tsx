import React from 'react';
import Home from '../../views/Home';

const App = () => {

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
