import React, {Component} from "react";
import Aux from "../../hoc/Aux";
import SignUpInputs from "../../components/SignUpInputs/SignUpInputs";
import axios from "axios"; 

class Login extends Component {

    state = {
        signupForm: {
            username: {
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Username'
                },
                value: ''
            },
            password: {
                elementConfig: {
                    type: 'text',
                    placeholder: 'Password'
                },
                value: ''
            },
            email: {
                elementConfig: {
                    type: 'text',
                    placeholder: 'Email'
                },
                value: ''
            }
        },
        loading: false
    }

    signupClick = () => {
        const formData = {};

        for (let formElementIdentifier in this.state.signupForm) {
            formData[formElementIdentifier] = this.state.signupForm[formElementIdentifier].value;
        }


        axios.post("/signup", formData)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    };

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedSignupForm = {
            ...this.state.signupForm
        };
        const updatedFormElement = { 
            ...updatedSignupForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedSignupForm[inputIdentifier] = updatedFormElement;
        this.setState({signupForm: updatedSignupForm});
    }

    handleOpen = () => {
        this.setState({ openListingDetail: true });
    };
    
    handleClose = () => {
    this.setState({ openListingDetail: false });
    };


    render () {

        const formElementsArray = [];
        for (let key in this.state.signupForm) {
            formElementsArray.push({
                id: key,
                config: this.state.signupForm[key]
            });
        }


        return (
            <Aux>
                <SignUpInputs 
                    changed = {this.inputChangedHandler}
                    elements = {formElementsArray}
                    signup = {this.signupClick}/>
            </Aux>
        );
    }

}

export default Login;