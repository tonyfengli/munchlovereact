import React, {Component} from "react";
import Listings from "../../components/Listings/Listings";
import Aux from "../../hoc/Aux";
import {connect} from "react-redux";
import * as actions from "../../store/actions/index";
import axios from 'axios';
import {Route, withRouter} from "react-router-dom";


class SearchResults extends Component {
    constructor() {
        super();
        this.state = {
            input: ""
        }
    }

    handleChange = (e) => {
        this.setState({ input: e.target.value });
        //this.props.getInput(e)
    }

    onClickFavorites = (index) => {
        const businessProps = this.props.businesses[index]
        
        const url = "/api/favorites";

        let favoritesData = {
            UserinfoId: this.props.userID,
            name: businessProps.name,
            price: businessProps.price,
            phone: businessProps.phone,
            rating: businessProps.rating,
            businessID: businessProps.businessID,
            image: businessProps.image
        }

        console.log(favoritesData)

        axios.post(url, favoritesData)
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        });


    }


    onClickSearch = () => {
        let location = this.state.input
        this.props.history.replace('/search/' + location);
        const query = '/search/' + location;
        this.props.renderBusinesses(query);
    }


    componentDidMount() {


        const query = this.props.location.pathname;
        console.log(query)
        this.props.renderBusinesses(query);
        
    } 


    render () {

        if(this.props.businesses.length === 0) {
            return (
                <Aux>
                    <h1> Loading... </h1>
                </Aux>
            );
        } else {
            return (
                <Aux>
                    <Listings 
                        clickTest = {this.onClickFavorites}
                        key = {this.props.businesses.id}
                        handleOpen = {this.handleOpen}
                        businesses = {this.props.businesses}/>
                </Aux>
            );
        }

    }

}

const mapStateToProps = state => {
    return {
        businesses: state.businessSearch.businesses,
        locationInput: state.businessSearch.locationInput,
        userID: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        renderBusinesses: (query) => dispatch(actions.renderBusinesses(query))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
