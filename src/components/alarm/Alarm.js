import React, {Component} from 'react';
import mainIconwhite from '../../images/mainIconwhite.png';
import clockIconTransp from '../../images/clockIconTransp.png';
import messIconTransp from '../../images/messIconTransp.png';
import deletetransparent from '../../images/deletetransparent.png'; 
import './_alarm.scss' 

class Alarm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message:'',
      title:'',
      time:'',
      items: [],
      
    }
  }

  // event handler to update the message
  updateMessage(event) {
    this.setState({
      message: event.target.value
    });
  }

   //event handler to update the title
  updateTitle(event) {
    this.setState({
      title: event.target.value
    });
  }

  // event handler to update the time
  updateTime(event){
    this.setState({
      time: event.target.value
    })

  }

  //push message,title and time in to items
  handleClick() {
    let items = [...this.state.items];

    if(this.state.time==""){
      console.log('time is empty')
    }
    
    items.push({
      message: this.state.message,
      title: this.state.title,
      time: this.state.time
    });

    // clear the input fields
    this.setState({
      items: items,
      message: "",
      title:"",
      time:""
    });
  }


  //make a clone to update the new list of items.
  //delete one index (obj)

  handleItemDeleted(i) {
    var updated_items = this.state.items;

    updated_items.splice(i, 1);
    this.setState({
      items:updated_items
    });
  }

  // Returns JSX and render title,message and time in the table

  renderRows() {
    // context is a ref to this.
    var context = this;
        return  this.state.items.map(function (item, i) {
          const { title,message,time } = item 
              return (
                <tr key={"item-" + i}>
                  <td>{title}</td>
                  <td>{message}</td>
                  <td>{time}</td>
                  <td>
                  <img 
                  className="icon-delete" src={deletetransparent} alt="delete"
                  onClick={context.handleItemDeleted.bind(context, i)}
                  />
                  </td>
                </tr>
            );
        });
    }

   // The interface for the input fields.
  render() {
    return (
      <div className="alarmForm-container">
        <div className="form-container">
          <div className="name">
            <img className="icon-settings" src={mainIconwhite} alt="pills"/>
            <h3 className="h3">MEDICINE</h3>
            <p className="paragraph">Write names of the medicines</p>
            <input
              className="input-felt"
              placeholder="ex. Alvedon, Ipren.. "
              type="text"
              value={this.state.title}
              onChange={this.updateTitle.bind(this)}
            />
          </div> 

          <div className="notes">
            <img className="icon-settings" src={messIconTransp} alt="letter"/>
            <h3 className="h3">MESSAGE</h3>
            <p className="paragraph">Add your own message</p>
            
            <input 
              rows="4" cols="50"
              className="input-felt"
              placeholder="ex. Taken with a meal.."
              type="text"
              value={this.state.message}
              onChange={this.updateMessage.bind(this)}
            />
          </div>

          <div className="time">
            <img className="icon-settings" src={clockIconTransp} alt="clock"/>
            <h3 className="h3">SET TIME</h3>
            <p className="paragraph">When to take the medicine?</p>
            <input
              className="input-felt"
              type="time" 
              id="appt" 
              name="appt"
              value={this.state.time}
              onChange={this.updateTime.bind(this)}
              required="required"
            />

          </div>
         <div>
          <button
            className="add-btn"
            onClick={this.handleClick.bind(this)}
          >
            
            <b>ADD</b>
          </button>
          </div>
        </div>
        
         {/* The interface for the table. */}
        <div id="table-container">
          <table id='info'>
            <thead>
              <tr>
                <th>
                  MEDICINE
                </th>
                <th>
                  MESSAGE
                </th>
                <th>
                  TIME
                </th>              
                <th>
                  DELETE
                </th>
              </tr>
            </thead>
            <tbody>
              {this.renderRows()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
 
export default Alarm;
