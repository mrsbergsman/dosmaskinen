import React, {Component} from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import medIconTransp from '../../images/medIconTransp.png';
import clockIconTransp from '../../images/clockIconTransp.png';
import voiceMailTransp from '../../images/voiceMailTransp.png';
import quarterClock from '../../images/quarterClock.png';  
import './_alarm.scss'; 
import {MdDeleteForever} from 'react-icons/md';
import {MdModeEdit} from 'react-icons/md';
import ReactPlayer from "react-player";
import alarm from '../../sounds/alarm.mp3';
import alarm2 from '../../sounds/alarm2.mp3';
import alarm3 from '../../sounds/alarm3.mp3';
import alarm4 from '../../sounds/alarm4.mp3';
import alarm5 from '../../sounds/alarm5.mp3';
import alarm6 from '../../sounds/alarm6.mp3';

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
    },() => console.log('detta är message', this.state.message));
  }

   //event handler to update the title
  updateTitle(event) {
    this.setState({
      title: event.target.value
    },() => console.log('detta är title', this.state.title));
  }

  // event handler to update the time
  updateTime(event){
    this.setState({
      time: event.target.value
    },() => console.log('detta är tiden', this.state.time))

  }

  //push voicemail,title and time in to items
  handleClick() {
    let items = [...this.state.items];
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

  // Returns JSX and render name, time, voicemail in the card
  renderRows() {
    // context is a ref to this.
    var context = this;
        return  this.state.items.map(function (item, i) {
          const { title,message,time } = item 
              return (
                <ul className="card-styling" key={"item-" + i}>
                  <li className="card-time"><p>Time:</p><b className="time-style">{time}</b></li>
                  <li className="card-message"><p>Alarm:</p><b className="message-style">{message}</b></li>
                  <p className="medicine">Medicine:</p>
                  {/* <hr style={{marginLeft:'-40px'}}/> */}
                  <li className="card-title">{title} </li>
                  <div className="card-img">
                      <img className="quarter-clock" src={quarterClock}/>
                      <MdModeEdit
                        className="edit-card"
                      />
                      <MdDeleteForever 
                      className="delete-card"
                      onClick={context.handleItemDeleted.bind(context, i)}
                      />
                  </div>
                </ul>
            );
        });
    }

   // The interface for the input fields.
  render() {
    return (
      <div className="alarmForm-container">
        <div className="form-container">
        <div className="time">
          <div className="icon-container">
            <img className="icon-settings" src={clockIconTransp} alt="clock"/>
          </div>
          <div className="text-container"> 
            <h3 className="h3">SET TIME</h3>
            <p className="paragraph">When to take the medicine?</p>
            <input
              className="input-felt"
              type="time" 
              id="appt" 
              name="appt"
              value={this.state.time}
              onChange={this.updateTime.bind(this)}
            />
            </div> 
          </div>
          <div className="name">
            <div className="icon-container">
            <img className="icon-settings" src={medIconTransp} alt="pill"/>
            </div>
            <div className="text-container">
            <h3 className="h3">MEDICINE</h3>
            <p className="paragraph">Add the medicines</p>
            <input
              className="input-felt"
              placeholder="ex. Alvedon, Ipren.. "
              type="text"
              value={this.state.title}
              onChange={this.updateTitle.bind(this)}
            />
           </div>
          </div> 

          <div className="voicemail">
            <div className="icon-container">
              <img className="icon-settings" src={voiceMailTransp} alt="letter"/>
            </div>
            <div className="text-container">
              <h3 className="h3">MESSAGE</h3>
              <p className="paragraph">Add your message</p>
              <DropdownButton id="dropdown-item-button" title="MESSAGE">
             
              <Dropdown.Item
                 className="dropdown-list-style"
                as="button" 
                value="Raindrops" 
                onClick={this.updateMessage.bind(this)}>
                Raindrops
                <ReactPlayer
                url={alarm}
                width="200px"
                height="30px"
                playing={false}
                controls={true}
                preload="none"
                className="player"
                />
                </Dropdown.Item>
              <Dropdown.Item
               className="dropdown-list-style2" 
                as="button" 
                value="Guitar music" 
                onClick={this.updateMessage.bind(this)}>
                Guitar music
                <ReactPlayer
                url={alarm2}
                width="200px"
                height="30px"
                playing={false}
                controls={true}
                preload="none"
                className="player"
                />
                </Dropdown.Item>
              <Dropdown.Item
               className="dropdown-list-style" 
                as="button" 
                value="Xylophone" 
                onClick={this.updateMessage.bind(this)}>
                Xylophone
                <ReactPlayer
                url={alarm3}
                width="200px"
                height="30px"
                playing={false}
                controls={true}
                preload="none"
                className="player"
                />
              </Dropdown.Item>
              <Dropdown.Item
              className="dropdown-list-style2"  
                as="button" 
                value="Polyphonic ringtone" 
                onClick={this.updateMessage.bind(this)}>
                Polyphonic ringtone
                <ReactPlayer
                url={alarm4}
                width="200px"
                height="30px"
                playing={false}
                controls={true}
                preload="none"
                className="player"
                />
                </Dropdown.Item>
                <Dropdown.Item
                className="dropdown-list-style"  
                as="button" 
                value="Fanfare" 
                onClick={this.updateMessage.bind(this)}>
                Fanfare
                <ReactPlayer
                url={alarm5}
                width="200px"
                height="30px"
                playing={false}
                controls={true}
                preload="none"
                className="player"
                />
                </Dropdown.Item>
                <Dropdown.Item 
                className="dropdown-list-style2" 
                as="button" 
                value="Intense alarm clock" 
                onClick={this.updateMessage.bind(this)}>
                Intense alarm clock
                <ReactPlayer
                url={alarm6}
                width="200px"
                height="30px"
                playing={false}
                controls={true}
                preload="none"
                className="player"
                />
                </Dropdown.Item>
              </DropdownButton>
            </div>
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
        
         {/* The interface for the cards */}
        <div id="main-card-container">
          <div id="card-container">
            {this.renderRows()}
          </div>
        </div>
        
      </div>
    );
  }
}
export default Alarm;


