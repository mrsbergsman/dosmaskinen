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
    () => toast("Account Created Successfully!"),
    (message) => toast.error(`Error: ${message}`));
  };

  // const handleCancelForm = (e) => {
  //   e.preventDefault();
  //   setFirstName('');
  //   setLastName('');
  //   setMobilNr('');
  //   setEmail('');
  //   setPassword('');
    // setError({ firstName: false, lastName: false, mobilnr:false, email: false, password: false });
  //};

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
    <div className="register-container">
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
        <h1 className="register-header">Create an account</h1>
          <div className="theForm">
            <form noValidate onSubmit={handleOnSubmit}>
              <div className="form-group text-left">
                <label htmlFor="firstName">Firstname:</label>
                <input noValidate id="firstName"
                  type="text"
                  name="firstName"
                  placeholder="Firstname..."
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="form-control" 
                />
              </div>
              <div className="form-group text-left">
                <label htmlFor="lastName">Lastname:</label>
                <input noValidate id="LastName"
                  type="text"
                  name="lastName"
                  placeholder="Lastname..."
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="form-control" 
                />
              </div>
              <div className="form-group text-left">
                <label htmlFor="mobilNr">Mobile phone number:</label>
                <input noValidate id="mobilnr"
                  type="mobilnr"
                  name="mobilnr"
                  placeholder="Phone number..."
                  value={mobilnr}
                  onChange={(e) => setMobilNr(e.target.value)}
                  className="form-control" 
                />
              </div>
              <div className="form-group text-left">
                <label htmlFor="email1">Email address:</label>
                <input noValidate id="email1"
                  type="email"
                  name="email"
                  placeholder="Email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control" 
                />
              </div>
              <div className="form-group text-left">
                <label htmlFor="password1">Password:</label>
                <input noValidate id="password1"
                  type="password"
                  name="password"
                  placeholder="Password..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control" />
                </div>
                <div className="register-buttons">
                  <button type="submit" className="register-btn">
                    Register 
                  </button>
                  <NavLink className="cancel"exact to="/">
                    <button className="cancel-btn"> 
                      Cancel 
                    </button>
                  </NavLink>
                </div>
                <div className="register-redirect">
                  <p className="haveAccount">Allready have an account? </p>
                  <NavLink className="redirectToLogin-Link"exact to="/login">
                    Login here
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
  dispatchRegisterAction: (firstName, lastName,mobilnr, email, password, onSuccess, onError) =>
  dispatch(registerUser({ firstName, lastName, mobilnr, email, password }, onSuccess, onError))
});
// Takes two arguments mapDispatchToProps and mapStateProps both are functions.
export default connect(null, mapDispatchToProps)(Register);
