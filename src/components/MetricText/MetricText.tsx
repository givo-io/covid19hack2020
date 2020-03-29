import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { MetricTextProps } from '../../types';

/**
 * 
 * Flex column-reverse to align the text at baseline with its parent
 */
const StackedText = (props: { text: string }) => {
  return (
    <Grid container direction="column-reverse">
      {props.text.split(' ').reverse().map((word: string, i: number) =>
        (<Grid item key={i}>
          <Typography variant="subtitle2">{word}</Typography>
        </Grid>))
      }
    </Grid>
  );
}

const MetricText = (props: MetricTextProps) => {
  const { title, subtitle } = props;

  return (
    <Grid spacing={2} container alignItems="baseline">
      <Grid item>
        <Typography variant="h3">{title}</Typography>
      </Grid>
      {subtitle && (
        <Grid item>
          <StackedText text={subtitle} />
        </Grid>
      )}
    </Grid>
  );
}

export default MetricText;