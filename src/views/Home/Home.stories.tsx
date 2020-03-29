import React from 'react';
import Home from './Home';
import CovidCard from './CovidCard';
import OfferCard from './OfferCard';

export default {
  title: 'Views/Home',
};

const metricFixture = [
  {title: '124', subtitle: 'Completed Contributions'},
  {title: '9345', subtitle: 'Completed Contributions'},
  {title: '89.754', subtitle: 'Reached Viewers'},
];

export const Covid = () => <CovidCard />;
export const Offer = () => <OfferCard />;
export const Component = () => <Home metricTextData={metricFixture}/>;
