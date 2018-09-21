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

  let businesses = (props.businesses.map(business => {
    return (
      <Grid item xs={4}>
        <Listing 
          handleOpen = {props.handleOpen}
          name = {business.name}
          phone = {business.phone}
          image = {business.image}
          rating = {business.rating}
          price = {business.price}
          key = {business.id}
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
