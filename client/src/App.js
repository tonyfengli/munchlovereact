import React, { Component } from 'react';
import Layout from "./hoc/Layout/Layout";
import {Route, withRouter} from "react-router-dom";
import { connect } from 'react-redux';
import HomePage from "./containers/HomePage/HomePage"
import SearchResults from "./containers/SearchResults/SearchResults"
import Favorites from "./containers/Favorites/Favorites"
import Auth from "./containers/Auth/Auth"
import * as actions from './store/actions/index';

class App extends Component {

  componentDidMount () {
    this.props.onTryAutoSignup();
  }

  render() {
    return (
      <div>
        <Layout>
          <Route path ="/" exact component = {HomePage}/>
          <Route path ="/search/:location" exact component = {SearchResults}/>
          <Route path ="/auth" exact component = {Auth}/>
          <Route path ="/favorites" exact component = {Favorites}/>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.password !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch( actions.authCheckState() )
  };
};

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( App ) );
