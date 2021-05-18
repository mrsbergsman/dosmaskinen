import React from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, Bounce } from 'react-toastify';
import './App.scss';
import Start from './components/start/Start';
import Home from './components/home/Home';
import LoginPage from './pages/loginpage.component';
import RegisterPage from './pages/registerpage.component';
import Profile from './components/profile/Profile';
import Information from './components/information/Information';
import UserInfo from './components/registerHeader/userInfo';
import Spinner from './components/spinner/spinnerComponent';
import { logoutUser } from './redux/actions/authActionCreators';

const App = ({user, dispatchLogoutAction}) =>{

  return (
    <>
      <ToastContainer position="top-center" autoClose={4000}
        hideProgressBar transition={Bounce }/>
      <Spinner/>
      <UserInfo isLoggedIn={user.isLoggedIn} userName={user.fullName} onLogout={dispatchLogoutAction}/>
      <div className="App">
        {!user.isLoggedIn ?
          (<Switch>
            <Route exact path="/start" component={Start} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} /> 
            <Redirect to="/start" />
          </Switch>) :
          (<Switch>
            <Route exact path="/home" component={Home} />
            {/* <Route exact path="/tracks" component={Player} /> */}
            <Route exact path="/information" component={Information} />
            <Route exact path="/profile" component={Profile} /> 
            {/* <Route exact path="/edit-post" component={EditPostPage}/>
            <Route exact path="/edit-post/:postId" component={EditPostPage}/>
            <Route exact path="/posts" component={PostPage}/> */}
            <Redirect to="/home" />
          </Switch>)
        }
        </div>
    </>
  );
};

const mapStateToProps = (state) => ({ user: state.user });
const mapDispatchToProps = (dispatch) => ({
  dispatchLogoutAction: () => dispatch(logoutUser())
});
export default connect(mapStateToProps,mapDispatchToProps)(App);
