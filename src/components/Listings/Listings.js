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

  const shuffle = (array) => {
      let currentIndex = array.length, temporaryValue, randomIndex;
      while (0 !== currentIndex) {
    
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
  }
        
  shuffle(props.listings);


  return (
    <div className={classes.root}>
    <Grid container spacing={24}>
        <Grid item xs={4}>
          <Listing 
            openListingDetail = {props.openListingDetail}
            listing = {props.listings[0]}
            className={classes.paper}>xs=3</Listing>
        </Grid>
        <Grid item xs={4}>
          <Listing 
            openListingDetail = {props.openListingDetail}
            listing = {props.listings[1]}
            className={classes.paper}>xs=3</Listing>
        </Grid>
        <Grid item xs={4}>
          <Listing 
            openListingDetail = {props.openListingDetail}
            listing = {props.listings[2]}
            className={classes.paper}>xs=3</Listing>
        </Grid>
    </Grid>

      
    </div>
  );
}

listings.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(listings);
