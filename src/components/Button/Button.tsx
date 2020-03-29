import { Button as MuiButton, withStyles } from '@material-ui/core';

const Button = withStyles({
  label: {
    textTransform: 'none'
  }
})(MuiButton);

export default Button;