import React, { Component } from 'react';
import Layout from "./components/Layout/Layout";
import ListingManager from "./containers/ListingManager/ListingManager"

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <ListingManager/>
        </Layout>
      </div>
    );
  }
}

export default App;
