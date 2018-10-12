import React, { Component } from 'react';
import Aux  from "../Aux";
import NavigationBar  from "../../components/Navigation/NavigationBar/NavigationBar";
import {connect} from "react-redux";
import * as actions from "../../store/actions/index";
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {Route, withRouter} from "react-router-dom";

import history from '../../history';


class Layout extends Component {

    state = {
        anchorEl: null,
        mobileMoreAnchorEl: null,
        isSearching: false,
        input: ""
    };

    handleProfileMenuOpen = event => {
        this.setState({ anchorEl: event.currentTarget });
    };
    
    handleMenuClose = () => {
        this.setState({ anchorEl: null });
        this.handleMobileMenuClose();
    };
    
    handleMobileMenuOpen = event => {
        this.setState({ mobileMoreAnchorEl: event.currentTarget });
    };
    
    handleMobileMenuClose = () => {
        this.setState({ mobileMoreAnchorEl: null });
    };

    handleLocationInputChange = (e) => {
        this.setState({ input: e.target.value });
        
    }

    onEnterSearch = (e) => {
        if(e.which === 13) {
            let location = this.state.input
            console.log(location);
            console.log(this.props.history);
            history.replace('/search/' + location);
          }
        
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        
        if (this.props.location.pathname !== prevProps.location.pathname) {
            const query = this.props.location.pathname;
            this.props.renderBusinesses(query);
        }
        
      }


    render () {


        const isMenuOpen = Boolean(this.state.anchorEl);
        const isMobileMenuOpen = Boolean(this.state.mobileMoreAnchorEl);

        const renderMenu = (
            <Menu
              anchorEl={this.state.anchorEl}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={isMenuOpen}
              onClose={this.handleMenuClose}
            >
              <MenuItem onClick={this.handleClose}>Profile</MenuItem>
              <MenuItem onClick={this.handleClose}>My account</MenuItem>
            </Menu>
          );

        const renderMobileMenu = (
            <Menu
                anchorEl={this.state.mobileMoreAnchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMobileMenuOpen}
                onClose={this.handleMobileMenuClose}
            >
                <MenuItem onClick={this.handleProfileMenuOpen}>
                    <IconButton color="inherit">
                        <AccountCircle />
                    </IconButton>
                    <p>Profile</p>
                </MenuItem>
            </Menu>
        );

        return (
            <Aux>
                <NavigationBar
                    isMenuOpen = {isMenuOpen}
                    isAuth = {this.props.isAuthenticated}
                    handleProfileMenuOpen = {this.handleProfileMenuOpen}
                    handleMenuClose = {this.handleMenuClose}
                    handleMobileMenuOpen = {this.handleMobileMenuOpen}
                    handleMobileMenuClose = {this.handleMobileMenuClose}
                    renderMenu = {renderMenu}
                    businesses = {this.props.businesses}
                    renderMobileMenu = {renderMobileMenu}
                    handleLocationInputChange = {this.handleLocationInputChange}
                    onEnterSearch ={this.onEnterSearch}/>
                <main>
                    {this.props.children}
                </main>
            </Aux>
        )
    }

}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.password !== null,
        businesses: state.businessSearch.businesses,

    }
}

const mapDispatchToProps = dispatch => {
    return {
        renderBusinesses: (query) => dispatch(actions.renderBusinesses(query))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));