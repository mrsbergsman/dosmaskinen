import React from 'react';
import './App.scss';
import Start from './components/start/Start';
import Home from './components/home/Home';
import Record from './components/record/Record';
import Information from './components/information/Information';
import {BrowserRouter as Router, Switch, Route} from'react-router-dom';
function App() {
  
return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Start} />
          <Route path="/start" exact component={Start} />
          <Route path="/home" component={Home} />
          <Route path="/information" component={Information} />
          <Route path="/record" component={Record} /> 
        </Switch>
      </div>
    </Router>
  );
}
export default App;
