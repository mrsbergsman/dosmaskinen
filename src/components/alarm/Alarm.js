import React, {Component} from 'react';


class Alarm extends Component {
  constructor(props) {
    super(props);
    this.state = { 

      userInput:'',
      list: [],
     }
  }
  render() { 
    return ( 
      <div>
        <h1>Alarm</h1>
        <input value={this.state.value}/>
        <button>press</button>
      </div>
     );
  }
}
 
export default Alarm;