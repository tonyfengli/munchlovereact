import React, {Component} from "react";
import Aux from "../../hoc/Aux";
import SearchBar from "../../components/SearchBar/SearchBar"

class HomePage extends Component {


    handleChange = (e) => {
        this.setState({ input: e.target.value });
    }

    onClickSearch = () => {
        let location = this.state.input
        console.log(location);
        console.log(this.props.history);
        this.props.history.replace('/search/' + location);
        
    }


    render () {


      return (
          <Aux>
              <SearchBar 
              label = "search"
              handleChange = {this.handleChange}
              onClickSearch = {this.onClickSearch}/>
          </Aux>
      );
    }

}



export default HomePage;