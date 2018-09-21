import React, {Component} from "react";
import Aux from "../../hoc/Aux";
import LoginInputs from "../../components/LoginInputs/LoginInputs"

class Login extends Component {

    state = {
        accounts: [
            {
                name:  "tonyli",
                password: "password"
            },
            {
                name:  "user1",
                password: "password"
            }
        ]
    }

    handleOpen = () => {
        this.setState({ openListingDetail: true });
    };
    
    handleClose = () => {
    this.setState({ openListingDetail: false });
    };


    render () {

        //const listings = [...this.state.businesses];

        return (
            <Aux>
                <LoginInputs/>
            </Aux>
        );
    }

}

export default Login;