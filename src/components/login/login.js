import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css";
import './_login.scss';

import {loginUser} from '../../redux/actions/authActionCreators'

const Login = ({dispatchLoginAction}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState({ email: false, password: false });

  const handleOnSubmit = (event) => {
    event.preventDefault();
    // if (isFormInvalid()) updateErrorFlags();
    dispatchLoginAction(email, password,
    () => toast("Logged In Successfully!"),
    (message) => toast.error(`Error: ${message}`));
  };
  const handleCancelForm = event => {
    event.preventDefault();
    setEmail('');
    setPassword('');
    // setError({ email: false, password: false });
  };
  
  // const isFormInvalid = () => (!email || !password);

  // const updateErrorFlags = () => {
  //     const errObj = { email: false, password: false };
  //     if (!email.trim()) errObj.email = true;
  //     if (!password.trim()) errObj.password = true;
  //     setError(errObj);
  // };

  return (
    <>
      <div className="login-container">
      <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
        <h1 className="login-header">Login</h1>
        <div className="theForm">
        <form noValidate onSubmit={handleOnSubmit}  >
            <div className="form-group text-left">
              <label htmlFor="email">Email address:</label>
              <input noValidate id="email"
                type="email"
                name="email"
                placeholder="Email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control" />
                    
            </div>
            <div className="form-group text-left">
              <label htmlFor="password">Password:</label>
              <input noValidate id="password"
                type="password"
                name="password"
                placeholder="Password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control" />
            </div>
            <div className="login-buttons">
              <button type="submit" className="login-btn">
                Login 
              </button>
              <NavLink className="cancel"exact to="/">
                <button className="cancel-btn"> 
                  Cancel 
                </button>
              </NavLink>
              </div>
            <div className="login-redirect">
              <p className="noAccount">Dont have an account? </p>
              <NavLink className="redirectToRegister-Link"exact to="/register">
                Register here
              </NavLink>
            </div>
          </form>
          </div>
        </div>
      </div>
    </>
  );

};
const mapDispatchToProps = dispatch => ({
  dispatchLoginAction: (email, password, onSuccess, onError) =>
  dispatch(loginUser({ email, password }, onSuccess, onError))
});
// Takes two arguements dispatchToProps and mapDispatchToProps both are functions.
export default connect(null, mapDispatchToProps)(Login);


