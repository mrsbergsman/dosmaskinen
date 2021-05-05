import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import './_register.scss'

import { registerUser } from '../../redux/actions/authActionCreators';
const Register = ({dispatchRegisterAction}) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobilnr, setMobilNr] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState({ firstName: false, lastName: false, mobilnr: false, email: false, password: false });
  
  const handleOnSubmit = (e) => {
    e.preventDefault();
    // if (isFormInvalid()) updateErrorFlags();
    dispatchRegisterAction(firstName, lastName, mobilnr, email, password,
    () => toast.dark("Account Created Successfully!"),
    (message) => toast.error(`Error: ${message}`));
  };

  const handleCancelForm = (e) => {
    e.preventDefault();
    setFirstName('');
    setLastName('');
    setMobilNr('');
    setEmail('');
    setPassword('');
    // setError({ firstName: false, lastName: false, mobilnr:false, email: false, password: false });
  };

  // const isFormInvalid = () => (!firstName || !lastName ||!mobilnr || !email || !password);

  // const updateErrorFlags = () => {
  //   const errObj = { firstName: false, lastName: false, mobilnr:false, email: false, password: false };
  //   if (!firstName) errObj.firstName = true;
  //   if (!lastName) errObj.lastName = true;
  //   if (!email) errObj.mobilnr = true;
  //   if (!email) errObj.email = true;
  //   if (!password) errObj.password = true;
  //   setError(errObj);
  // };

  return (
    <>
      <br />
      <br />
    <div className="register-container">
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
          <br />
          <br/>
        <h3>New User ?</h3>
        <h5>Create an account</h5>
        <br />
          <form noValidate onSubmit={handleOnSubmit}>
            <div className="form-group text-left">
            <label htmlFor="firstName">Firstname</label>
            <input noValidate id="firstName"
            type="text"
            name="firstName"
            placeholder="Firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="form-control" />
        </div>
      <div className="form-group text-left">
        <label htmlFor="lastName">Lastname</label>
        <input noValidate id="lastName"
          type="text"
          name="lastName"
          placeholder="LastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="form-control" />
            </div>
            <div className="form-group text-left">
        <label htmlFor="mobilNr">Mobilnummer</label>
        <input noValidate id="mobilnr"
          type="mobilnr"
          name="mobilnr"
          placeholder="Mobilnummer"
          value={mobilnr}
          onChange={(e) => setMobilNr(e.target.value)}
          className="form-control" />
      </div>
        <div className="form-group text-left">
        <label htmlFor="email1">Email Address</label>
        <input noValidate id="email1"
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control" />
      </div>
        <div className="form-group text-left">
          <label htmlFor="password1">Password</label>
          <input noValidate id="password1"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control" />
            </div>
            <button type="submit" className="btn btn-dark mr-2">Register </button>
            <NavLink className="cancel"exact to="/">
            <button className="btn btn-dark mr-2"> 
              Cancel  </button></NavLink>
          </form>
          <br />
          <br />
          <br />
        </div>
      </div>
    </>
  );

};
const mapDispatchToProps = dispatch => ({
  dispatchRegisterAction: (firstName, lastName,mobilnr, email, password, onSuccess, onError) =>
  dispatch(registerUser({ firstName, lastName, mobilnr, email, password }, onSuccess, onError))
});
// Takes two arguments mapDispatchToProps and mapStateProps both are functions.
export default connect(null, mapDispatchToProps)(Register);
