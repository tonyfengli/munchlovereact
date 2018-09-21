import React, {Component} from "react";
import Listings from "../../components/Listings/Listings"
import Aux from "../../hoc/Aux";
import SearchBar from "../../components/SearchBar/SearchBar"

class ListingManager extends Component {
    constructor() {
        super();
        this.state = {
            businesses: [],
            input: ""
        }
    }

    handleChange = (e) => {
        this.setState({ input: e.target.value });
    }


    handleClick = () => {

    
        this.setState({ businesses: [] });
        let location = this.state.input
        console.log(location);
        this.props.history.replace('/searchresults/' + location);
        const query = '/searchresults/' + location;
        fetch(query)
        .then(res => res.json())
        .then(businesses => this.setState({businesses: businesses}));
        
    }

    componentDidMount() {
        
        const query1 = new URLSearchParams(this.props.location.search)

        const user = query1.get("user");
        console.log(user);

        const query = this.props.location.pathname;
        console.log(query);
        fetch(query)
        .then(res => res.json())
        .then(businesses => this.setState({businesses}));
    } 


    render () {


        if(this.state.businesses.length === 0) {
            return (
                <Aux>
                    <h1> Loading... </h1>
                </Aux>
            );
        } else {
            return (
                <Aux>
                    <SearchBar 
                    label = "search"
                    handleChange = {this.handleChange}
                    handleClick = {this.handleClick}/>
                    
                    <div> ListingSearch </div>
                    <Listings 
                        key = {this.state.businesses.id}
                        handleOpen = {this.handleOpen}
                        businesses = {this.state.businesses}/>
                </Aux>
            );
        }

    }

}

export default ListingManager;