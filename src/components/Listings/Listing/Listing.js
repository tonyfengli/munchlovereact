import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function listing(props) {

    const listingName = props.listing.name
    const listingPhone = props.listing.phone

  return (
    <Card className={props.card}>
      <CardContent>
        <Typography variant="headline" component="h2">
          {listingName}
        </Typography>
        <Typography component="p">
          <br />
          Phone Number: {listingPhone}
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
          onClick = {props.handleOpen}
          size="small">Details</Button>
      </CardActions>
    </Card>
  );
}


export default withStyles(styles)(listing);