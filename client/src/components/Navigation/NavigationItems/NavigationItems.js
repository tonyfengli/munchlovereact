import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  });


function navigationItems (props) {

    const { classes } = props;

    return (
        <div>
            <div className={classes.sectionDesktop}>
                <IconButton
                    aria-owns={props.isMenuOpen ? 'material-appbar' : null}
                    aria-haspopup="true"
                    onClick={props.handleProfileMenuOpen}
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
            </div>
            <div className={classes.sectionMobile}>
                <IconButton aria-haspopup="true" onClick={props.handleMobileMenuOpen} color="inherit">
                    <MoreIcon />
                </IconButton>
            </div>
        </div>
    );

}

export default withStyles(styles)(navigationItems);