import React, {Component} from "react";
import Aux from "../../hoc/Aux";
import SearchBar from "../../components/SearchBar/SearchBar"

class HomePage extends Component {

    constructor() {
        super();
        this.state = {
            users: [
                {
                    name: "tony"
                },
                {
                    name: "tony1"
                }
            ],
            selectedUser: ""
        }
    }


    handleChange = (e) => {
        this.setState({ input: e.target.value });
    }

    handleClick = () => {
        let location = this.state.input
        console.log(location);
        this.props.history.replace('/searchresults/' + location);
        
    }


    userSelect = (user) => {
        this.setState({ selectedUser: user  }, () => this.handleRoute(user));
    }

    handleRoute = (user) => {

        const location = this.state.input
        const queryParams = [];
        queryParams.push(encodeURIComponent("user") + "=" + user);

        const queryString = queryParams.join("");

        this.props.history.push({
            pathname: "./searchresults/" + location,
            search: "?" + queryString
        })
    }


    render () {

        let users = [...this.state.users]
        let usersDiv = users.map(user => {
            return <p name = {user.name} onClick= {() => this.userSelect(user.name)}> {user.name} </p>
        })

      return (
          <Aux>
              <SearchBar 
              label = "search"
              handleChange = {this.handleChange}
              handleClick = {this.handleClick}/>
              {usersDiv}
          </Aux>
      );
    }

}

export default HomePage;