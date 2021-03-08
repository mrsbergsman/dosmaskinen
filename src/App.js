
import './App.scss';
import Login from './components/login/Login';
import Start from './components/start/Start';
import Home from './components/home/Home';

import {BrowserRouter as Router, Switch, Route} from'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
      <Route path="/" exact component={Start} />
      <Route path="/login" component={Login}/>
      <Route path="/home" component={Home}/>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
