import React from 'react';
import {
  Toolbar,
  IconButton,
  MenuItem,
  AppBar as MuiAppBar,
  Avatar,
  makeStyles,
  Theme,
  createStyles,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
  Box
} from '@material-ui/core';
import Button from '../Button';
import testImage from '../../assets/test.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      marginRight: theme.spacing(4),
    },
  }),
);

const AppBar = () => {
  const classes = useStyles();
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <MuiAppBar position="static">
      <Toolbar>
        <Button className={classes.button}>Home</Button>
        <Button className={classes.button}>Contributions</Button>
        <Button className={classes.button}>Messages</Button>
        <Box flexGrow={1}/>
        <IconButton
          ref={anchorRef}
          aria-label="user profile"
          aria-controls="menu-profile"
          aria-haspopup="true"
          onClick={handleToggle}
          color="inherit"
        >
          <Avatar src={testImage} />
        </IconButton>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-profile" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Toolbar>
    </MuiAppBar >
  )
}

export default AppBar;