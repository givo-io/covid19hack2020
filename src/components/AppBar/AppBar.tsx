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
  Box,
  Typography
} from '@material-ui/core';
import Button from '../Button';
import testImage from '../../assets/test.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: 20,
      boxShadow: '0px 4px 6px rgba(50, 50, 93, 0.0011), 0px 1px 3px rgba(0, 0, 0, 0.08)'
    },
    button: {
      marginLeft: theme.spacing(4),
    },
    avatar: {
      borderRadius: 12,
      width: '52px',
      height: '52px'
    }
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
    <MuiAppBar color="transparent" position="static" className={classes.root}>
      <Toolbar disableGutters>
        <Button className={classes.button}>Home</Button>
        <Button className={classes.button}>Contributions</Button>
        <Button className={classes.button}>Messages</Button>
        <Box flexGrow={1}/>
        <Typography variant="subtitle2">Dokedu UG</Typography>
        <IconButton
          ref={anchorRef}
          aria-label="user profile"
          aria-controls="menu-profile"
          aria-haspopup="true"
          onClick={handleToggle}
          color="inherit"
        >
          <Avatar src={testImage} className={classes.avatar} />
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