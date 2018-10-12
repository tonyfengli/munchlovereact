import React, {Component} from "react";
import Listings from "../../components/Listings/Listings";
import Aux from "../../hoc/Aux";
import {connect} from "react-redux";
import * as actions from "../../store/actions/index";


class Favorites extends Component {
    constructor() {
        super();
        this.state = {
            input: ""
        }
    }


    componentDidMount() {

        const query = "/api/favorites";
        this.props.renderFavorites(query);
    } 


    render () {


        if(this.props.favorites.length === 0) {
            return (
                <Aux>
                    <h1> Loading... </h1>
                </Aux>
            );
        } else {
            return (
                <Aux>
                    <h1> Favorites </h1>
                    <Listings 
                        key = {this.props.favorites.id}
                        handleOpen = {this.handleOpen}
                        businesses = {this.props.favorites}/>
                </Aux>
            );
        }

    }

}

const mapStateToProps = state => {
    return {
        favorites: state.businessSearch.favorites,
        input: state.businessSearch.input,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        renderFavorites: (query) => dispatch(actions.renderFavorites(query))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);