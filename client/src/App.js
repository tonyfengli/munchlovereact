import React, { Component } from 'react';
import Layout from "./components/Layout/Layout";
import {Route} from "react-router-dom";
import HomePage from "./containers/HomePage/HomePage"
import ListingManager from "./containers/ListingManager/ListingManager"
import Login from "./containers/Login/Login"

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Route path ="/" exact component = {HomePage}/>
          <Route path ="/searchresults/:location" exact component = {ListingManager}/>
          <Route path ="/login" exact component = {Login}/>
        </Layout>
      </div>
    );
  }
}

export default App;