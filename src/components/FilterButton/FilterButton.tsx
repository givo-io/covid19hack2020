import {
    Button,
    makeStyles,
    Theme,
    createStyles,
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      marginRight: theme.spacing(4),
    },
  }),
);

const FilterButton = (props: any) => {
    const classes = useStyles();
    return (
    <Button variant="outlined">
        {
            props.text 
                ? props.text 
                : ""
        }
    </Button>
    )
  }
  
  export default FilterButton;