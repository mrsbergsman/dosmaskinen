import React, {useState} from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";
import './_register.scss'
import {API_BASE_URL, ACCESS_TOKEN_NAME} from '../../constants/apiConstants';
import './_register.scss'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import RegisterHeader from '../registerHeader/RegisterHeader';
//import AlertComponent from '../AlertComponent/AlertComponent'; 


function Register(props) {

    // Sets state object to email and password setState will update the value
    const [state , setState] = useState({
        email : "",
        password : "",
        confirmPassword: "",
        successMessage: null
    })

    const [title, updateTitle] = useState(null);
    // const [errorMessage, updateErrorMessage] = useState(null);

    //function that handle values when writing in input fields
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    //function that check if password match in both password inputs.
    //function send a call to sendDetailsToserver function to make a backend request. 
    //Else show a message it do not match.
    const handleSubmitClick = (e) => {
        e.preventDefault();
        if(state.password === state.confirmPassword) {
            sendDetailsToServer()    
        } else {
            props.showError('Passwords do not match');
        }
    }

    //Making a post request using Axios to the server where API_BASE_URL is defined in the constans file.
    const sendDetailsToServer = () => {
        if(state.email.length && state.password.length) {
            props.showError(null);
            const payload={
                "email":state.email,
                "password":state.password,
            } 
            axios.post(API_BASE_URL+'/user/register', payload)
                .then(function (response) {
                    if(response.status === 200){
                        setState(prevState => ({
                            ...prevState,
                            'successMessage' : 'Registration successful. Redirecting to home page..'
                        }))
                        redirectToHome();
                        props.showError(null)
                    } else{
                        props.showError("Some error ocurred");
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });    
        } else {
            props.showError('Please enter valid username and password')    
        }
        
    }
    //sends user to home on succesful regristration on click
    const redirectToHome = () => {
        props.updateTitle('Home')
        props.history.push('/start'); //ändra till home sen
    }

    //redirect to login component insted
    const redirectToLogin = () => {
        props.updateTitle('Login')
        props.history.push('/login'); 
    }

  return (
    <>
    <Header/>
    <div className="register-container">
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">

        <RegisterHeader title={title}/> 
            <form>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" 
                        className="form-control" 
                        id="email" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter email..."
                        value={state.email}
                        onChange={handleChange}
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password..."
                        value={state.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="confirmPassword" 
                        placeholder="Confirm password..."
                        value={state.confirmPassword}
                        onChange={handleChange} 
                    />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={handleSubmitClick}
                >
                    Register
                </button>
            </form>
            {/* <Register showError={updateErrorMessage} updateTitle={updateTitle}/> */}
            {/* <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage}/>  */}

        </div>

        <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
            {state.successMessage}
        </div>
        <div className="account-text">
            <span>Already have an account? </span>
            <span className="loginText" onClick={() => redirectToLogin()}>Login here</span> 
        </div>

    </div>

    <Footer/>
    </>
  );
}

export default withRouter(Register);