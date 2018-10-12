import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Listing from "./Listing/Listing"

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function listings(props) {

  const { classes } = props;

  let businesses = (props.businesses.map((businesses, index) => {
    return (
      <Grid item xs={4}>
        <Listing 
          clickTest = {() => props.clickTest(index)}
          businessID = {businesses.businessID}
          handleOpen = {props.handleOpen}
          name = {businesses.name}
          phone = {businesses.phone}
          image = {businesses.image}
          rating = {businesses.rating}
          price = {businesses.price}
          className={classes.paper}>xs=3</Listing>
      </Grid>
    ); 
  }))


  return (
    <div className={classes.root}>
    <Grid container spacing={24}>
        {businesses}
    </Grid>

      
    </div>
  );
}

listings.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(listings);
