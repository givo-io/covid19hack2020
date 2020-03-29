import {
  Theme,
  withStyles,
  Button,
} from '@material-ui/core';

const FilterButton = withStyles((theme: Theme) => {
  return {
    root: {
      marginRight: theme.spacing(2),
      borderRadius: 8,
      border: 'none',
      background: '#F2F2F2',
      padding: '2px 7px',
    },
    label: {
      textTransform: 'none',
    }
  };
})(Button);

export default FilterButton;