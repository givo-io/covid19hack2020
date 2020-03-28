import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Button from '../Button/Button';
import FilterButton from '../FilterButton/FilterButton';
import {
    List,
    ListItemSecondaryAction,
    ListItemText,
    ListItem,
    ListItemAvatar,
    Avatar,
    Grid,
    Paper,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        textAlign: 'center',
        alignSelf: 'center',
        width: '100%',
        maxWidth: 1110,
        backgroundColor: theme.palette.background.paper,
    },
    paper: {
        
        width: '100%',
        maxWidth: 1110,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
  }),
);

const ContributionList = () => {
const classes = useStyles();

  return (
    <Grid container  className={classes.root} spacing={3} direction="column" justify="space-between" alignItems="center" >
        <Grid className={classes.root}>

            <h3>
                Contributions
            </h3>
            <Button>
                create contribution
            </Button>
        
        </Grid>
        <Grid xs={6} className={classes.root}>
            <List className={classes.root}>
            {[0, 1, 2, 3].map(index => {
                const labelId = `checkbox-list-secondary-label-${index}`;
                return (
                <Paper>
                    <ListItem key={index} button>
                        <ListItemAvatar>
                        <Avatar
                            alt={`Avatar n°${index + 1}`}
                            src={`/static/images/avatar/${index + 1}.jpg`}
                        />
                        </ListItemAvatar>
                        <ListItemText id={labelId} primary={`Line item ${index + 1}`} secondary='test'/>
                        <ListItemSecondaryAction>
                            <FilterButton text={"test"}/>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Paper>
                );
            })}
            </List>
        </Grid>
    </Grid>
  );
};

export default ContributionList;