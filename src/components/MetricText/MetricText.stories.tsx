import React from 'react';
import MetricText from './MetricText';

export default {
  title: 'Components/MetricText',
};

export const Component = () =>
  <React.Fragment>
    <MetricText title='Title' subtitle='Extralong Multiword Subtitle' />
    <MetricText title='Title' subtitle='Multiword Subtitle' />
    <MetricText title='Title' subtitle='Subtitle' />
    <MetricText title='Title' />
  </React.Fragment>
  ;
