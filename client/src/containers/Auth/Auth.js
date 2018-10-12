import React, {Component} from "react";
import Aux from "../../hoc/Aux";
import SignUpInputs from "../../components/SignUpInputs/SignUpInputs";
import axios from "axios"; 
import Button from '@material-ui/core/Button';  
import {connect} from "react-redux";
import * as actions from "../../store/actions/index";
import {Route, withRouter} from "react-router-dom";

class SignUp extends Component {

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
        loading: false,
        isSignup: true
    }

    

    signupClick = () => {
        const formData = {};

        for (let formElementIdentifier in this.state.signupForm) {
            formData[formElementIdentifier] = this.state.signupForm[formElementIdentifier].value;
        }

        this.props.onAuth(formData.username, formData.password, formData.email, this.state.isSignup);

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

    authLogout = () => {
        if(this.props.username) {
            this.props.logOut();
        } else {
            alert("no one to log out, dumbass");
        }
        
    };


    

    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return {isSignup: !prevState.isSignup};
        });
    }


    render () {

        const formElementsArray = [];
        for (let key in this.state.signupForm) {
            formElementsArray.push({
                id: key,
                config: this.state.signupForm[key]
            });
        }

        let form;
        
        if (this.props.loading) {
            form = (
                <h1> loading... </h1>
            );
        } else {
            form = (
                <SignUpInputs 
                changed = {this.inputChangedHandler}
                elements = {formElementsArray}
                pageButtonText = {this.state.isSignup ? 'REGISTER' : 'LOGIN'}
                signup = {this.signupClick}/>
            );
        }

        let errorMessage = null;

        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
        }


        return (
            <Aux>
                {form}
                {errorMessage}
                <Button 
                    onClick={this.switchAuthModeHandler}>
                    SWITCH TO {this.state.isSignup ? 'SIGNIN' : 'SIGNUP'} </Button>
                {this.props.isAuth
                    ? <Button 
                    onClick={this.authLogout}> Logout </Button>
                    : null
                }
                
            </Aux>
        );
    }

}


const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        username: state.auth.username,
        isAuth: state.auth.password !== null,
        error: state.auth.error
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: ( username, password, email, isSignup ) => dispatch(actions.auth( username, password, email, isSignup )),
        logOut: () => dispatch(actions.authLogout())
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));