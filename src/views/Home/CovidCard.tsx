import React from 'react';
import {
  Card,
  makeStyles,
  Theme,
  createStyles,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  Button as MuiButton,
  Box,
  Grid
} from '@material-ui/core';
import Button from '../../components/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '730px',
      height: '412px',
      borderRadius: 20,
      background: '#232323',
    },
    title: {
      fontWeight: 'bold',
      fontStyle: 'normal',
      fontSize: '48px',
      lineHeight: '48px',
      letterSpacing: '0.01em',
      color: '#F3F1CE',
    },
    subtitle: {
      fontWeight: 500,
      fontStyle: 'normal',
      fontSize: '24px',
      lineHeight: '24px',
      letterSpacing: '0.01em',
      color: '#767676',
    },
    readButton: {
      marginRight: '30px',
      color: '#F3F1CE',
    },
    button: {
      borderRadius: 50,
      background: '#F3F1CE',
      color: '#232323',
      padding: '16px 30px'
    },
    mid: {
      height: '180px',
    },
    message: {
      fontWeight: 500,
      fontStyle: 'normal',
      fontSize: '16px',
      lineHeight: '180%',
      letterSpacing: '0.01em',
      color: '#F2F2F2'
    }
  }),
);

const CovidCard = () => {
  const classes = useStyles();

  return (
    <Card elevation={0} className={classes.root}>
      <Box p="48px">
        <CardActionArea>
          <CardContent style={{padding:0}}>
            <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
              We Need Your Help
          </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.subtitle}>
              COVID-19 is influencing our lives
          </Typography>
            <Grid container direction="column" className={classes.mid} justify="center">
              <Typography variant="body2" color="textSecondary" component="p" className={classes.message}>
                Sit dignissim lacinia aliquam adipiscing ultrices est massa. Enim, cursus ultrices vulputate nunc ligula. Mi sed phasellus odio neque, porttitor dolor. Rhoncus mauris diam accumsan diam libero.
              </Typography>
            </Grid>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="medium" color="primary" className={classes.readButton}>
            read more
        </Button>
          <MuiButton size="medium" color="primary" variant="contained" className={classes.button}>
            CONTRIBUTE
        </MuiButton>
        </CardActions>
      </Box>
    </Card>
  )
}

export default CovidCard;