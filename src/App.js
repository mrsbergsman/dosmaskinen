import React, {useState} from 'react';
import './App.scss';
import Login from './components/login/Login';
import Start from './components/start/Start';
import Home from './components/home/Home';
import Register from './components/register/Register';

import AlertComponent from './components/AlertComponent/AlertComponent';  
//import RegisterHeader from './components/registerHeader/RegisterHeader';
import PrivateRoute from './utils/PrivateRoute';

import {BrowserRouter as Router, Switch, Route} from'react-router-dom';

function App() {

 
  const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null);

  return (
    <Router>
      <div className="App">
        {/* <RegisterHeader title={title}/> Denna är flyttad till registercomponent för att hamna rätt */}
        <Switch>
          <Route path="/" exact component={Start} />

          {/* <Registration showError={updateErrorMessage} updateTitle={updateTitle}/>
                </Route> */}

          <Route path="/start" exact component={Start} />
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home}/>

          <Route path="/register" component={Register}>

            {/* Hur kan vi få denna till registerComponent */}
            <Register showError={updateErrorMessage} updateTitle={updateTitle}/>  

          </Route>

          <PrivateRoute path="/start">
            <Home/>
          </PrivateRoute>

        </Switch>

        {/* Hur kan vi få denna till registerComponent */}
        <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage} />

      </div>
    </Router>
  );
}

export default App;
