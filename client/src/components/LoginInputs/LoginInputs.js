import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LoginInput from "./LoginInput/LoginInput"
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  root2: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  layout: {
    width: 'auto',
    display: 'block', // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
});

function loginInputs(props) {

  const { classes } = props;


  return (
    <div className={classes.root}>
      <main className={classes.layout}>
          <Paper className={classes.root2} elevation={1}>
            <Grid item xs={12}>
              <LoginInput 
                label = "Username"
                className={classes.paper}></LoginInput>
            </Grid>
            <Grid item xs={12}>
              <LoginInput 
                label = "Password"
                className={classes.paper}></LoginInput>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" className={classes.button}>
                Login
              </Button>
              <Button variant="contained" className={classes.button}>
                Register
              </Button>
            </Grid>
            
          </Paper>
      </main>
    </div>
  );
}

loginInputs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(loginInputs);
