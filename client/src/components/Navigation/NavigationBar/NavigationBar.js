import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import NavigationItems from '../NavigationItems/NavigationItems';
import SearchBar from '../SearchBar/SearchBar';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import {Route, withRouter} from "react-router-dom";



const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
  margin: {
    margin: theme.spacing.unit,
  },
  textField: {
    flexBasis: 200,
  },
});


function NavigationBar (props) {
  const { classes } = props;

  let searchBar = null;

  if (props.businesses.length > 0) {
    searchBar = <SearchBar
    onEnterSearch = {props.onEnterSearch}
    handleLocationInputChange = {props.handleLocationInputChange}/>
  }


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="title" color="inherit" noWrap>
            MUNCH
          </Typography>
          {searchBar}
          <div className={classes.grow} />
        <NavigationItems
          handleProfileMenuOpen = {props.handleProfileMenuOpen}
          handleMobileMenuOpen = {props.handleMobileMenuOpen}/>  
        </Toolbar>
      </AppBar>
      {props.renderMenu}
      {props.renderMobileMenu} 
    </div>
  );

}

NavigationBar.propTypes = {
  classes: PropTypes.object.isRequired
};



export default withRouter(withStyles(styles)(NavigationBar));