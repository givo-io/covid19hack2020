import { Button as MuiButton, withStyles } from '@material-ui/core';

const Button = withStyles({
  label: {
    textTransform: 'capitalize'
  }
})(MuiButton);

export default Button;