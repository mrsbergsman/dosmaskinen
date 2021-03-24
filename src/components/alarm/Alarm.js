import React, {Component} from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import mainIconwhite from '../../images/mainIconwhite.png';
import clockIconTransp from '../../images/clockIconTransp.png';
import messIconTransp from '../../images/messIconTransp.png';
import deletetransparent from '../../images/deletetransparent.png'; 
import './_alarm.scss' 
import MedicineList from './MedicineList';
import './_medicineList.scss'
import { HiCheckCircle } from 'react-icons/hi';
import {RiDeleteBackFill} from 'react-icons/ri';

class Alarm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message:'',
     // title:'',
      time:'',
      items: [],

      pills:"",
      list:[],

    } 
  
  }
   // handle pills-------------------------------------------------
   updatePills(event){
   
    this.setState({
    pills:event.target.value

    })
  }

  handleList(){
   
  let list = [...this.state.list]

  list.push({
    pills:this.state.pills
  })
   this.setState({
     list:list,
     pills:"",
   })
  }

  handleDeletedPill(i){
    let updatedList = [...this.state.list];
    updatedList.splice(i,1)
    this.setState({
      list:updatedList
    })

  }

  renderList(){
    var context2 = this;
    return this.state.list.map(function(pill, i){
      const {pills}   = pill
      
      return(
        
        <ul className="pill-list" key={"pill-" + i}>
        <li className="pill">{pills}</li>
        <RiDeleteBackFill
        className="delete-pill"
        onClick={context2.handleDeletedPill.bind(context2, i)}
        />
        </ul>
      
      )
    })
  }
  //------------------------------------------------------------
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
    let {list} =this.state

   
   
    
    items.push({
      message: this.state.message,
      list: this.state.list,
      time: this.state.time
    });
     console.log(this.state.list,'detta är listan för medecinerna!!!')
     console.log(this.state.items, 'Detta är lisatn för hela skiten')



    // clear the input fields
    this.setState({
      items: items,
      list:list,
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
          const { list,message,time } = item 
          
              return (
                <tr key={"item-" + i}>
                  <td></td>
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
            <div className="list-container">
              <input
              className="input-pill"
              type="text"
              value={this.state.pills}
              onChange={this.updatePills.bind(this)}
              
              />
              <HiCheckCircle
                className="add-pill"
                onClick={this.handleList.bind(this)}
                />

              <div>{this.renderList()}</div>
          </div>
           
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

       {/* <DropdownButton style={{border:'1px solid red'}}id="dropdown-item-button" title="Dropdown button">
        <Dropdown.ItemText style={{backgroundColor:'pink'}}>Dropdown item text</Dropdown.ItemText>
        <Dropdown.Item as="button">Action</Dropdown.Item>
        <Dropdown.Item as="button">Another action</Dropdown.Item>
        <Dropdown.Item style={{backgroundColor:'yellow'}} as="button">Something else</Dropdown.Item>
        </DropdownButton> */}
      </div>
    );
  }
}
 
export default Alarm;


//-----------------backup---------------------------------------------
// import React, {Component} from 'react';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Dropdown from 'react-bootstrap/Dropdown';
// import mainIconwhite from '../../images/mainIconwhite.png';
// import clockIconTransp from '../../images/clockIconTransp.png';
// import messIconTransp from '../../images/messIconTransp.png';
// import deletetransparent from '../../images/deletetransparent.png'; 
// import './_alarm.scss' 
// import MedicineList from './MedicineList';

// class Alarm extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       message:'',
//       title:'',
//       time:'',
//       items: [],
      
//     }
//   }

//   // event handler to update the message
//   updateMessage(event) {
//     this.setState({
//       message: event.target.value
//     });
//   }

//    //event handler to update the title
//   updateTitle(event) {
//     this.setState({
//       title: event.target.value
//     });
//   }

//   // event handler to update the time
//   updateTime(event){
//     this.setState({
//       time: event.target.value
//     })

//   }

//   //push message,title and time in to items
//   handleClick() {
//     let items = [...this.state.items];

   
    
//     items.push({
//       message: this.state.message,
//       title: this.state.title,
//       time: this.state.time
//     });

//     // clear the input fields
//     this.setState({
//       items: items,
//       message: "",
//       title:"",
//       time:""
//     });
//   }


//   //make a clone to update the new list of items.
//   //delete one index (obj)

//   handleItemDeleted(i) {
//     var updated_items = this.state.items;

//     updated_items.splice(i, 1);
//     this.setState({
//       items:updated_items
//     });
//   }

//   // Returns JSX and render title,message and time in the table

//   renderRows() {
//     // context is a ref to this.
//     var context = this;
//         return  this.state.items.map(function (item, i) {
//           const { title,message,time } = item 
//               return (
//                 <tr key={"item-" + i}>
//                   <td>{title}</td>
//                   <td>{message}</td>
//                   <td>{time}</td>
//                   <td>
//                   <img 
//                   className="icon-delete" src={deletetransparent} alt="delete"
//                   onClick={context.handleItemDeleted.bind(context, i)}
//                   />
//                   </td>
//                 </tr>
//             );
//         });
//     }

//    // The interface for the input fields.
//   render() {
//     return (
//       <div className="alarmForm-container">
//         <div className="form-container">
//           <div className="name">
//             <img className="icon-settings" src={mainIconwhite} alt="pills"/>
//             <h3 className="h3">MEDICINE</h3>
//             <p className="paragraph">Write names of the medicines</p>
//             <input
//               className="input-felt"
//               placeholder="ex. Alvedon, Ipren.. "
//               type="text"
//               value={this.state.title}
//               onChange={this.updateTitle.bind(this)}
//             />
           
//           </div> 

//           <div className="notes">
//             <img className="icon-settings" src={messIconTransp} alt="letter"/>
//             <h3 className="h3">MESSAGE</h3>
//             <p className="paragraph">Add your own message</p>
            
//             <input 
//               rows="4" cols="50"
//               className="input-felt"
//               placeholder="ex. Taken with a meal.."
//               type="text"
//               value={this.state.message}
//               onChange={this.updateMessage.bind(this)}
//             />
//           </div>

//           <div className="time">
//             <img className="icon-settings" src={clockIconTransp} alt="clock"/>
//             <h3 className="h3">SET TIME</h3>
//             <p className="paragraph">When to take the medicine?</p>
//             <input
//               className="input-felt"
//               type="time" 
//               id="appt" 
//               name="appt"
//               value={this.state.time}
//               onChange={this.updateTime.bind(this)}
//               required="required"
//             />

//           </div>
//          <div>
//           <button
//             className="add-btn"
//             onClick={this.handleClick.bind(this)}
//           >
            
//             <b>ADD</b>
//           </button>
//           </div>
//         </div>
        
//          {/* The interface for the table. */}
//         <div id="table-container">
//           <table id='info'>
//             <thead>
//               <tr>
//                 <th>
//                   MEDICINE
//                 </th>
//                 <th>
//                   MESSAGE
//                 </th>
//                 <th>
//                   TIME
//                 </th>              
//                 <th>
//                   DELETE
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {this.renderRows()}
//             </tbody>
//           </table>
//         </div>
//        {/* <DropdownButton style={{border:'1px solid red'}}id="dropdown-item-button" title="Dropdown button">
//         <Dropdown.ItemText style={{backgroundColor:'pink'}}>Dropdown item text</Dropdown.ItemText>
//         <Dropdown.Item as="button">Action</Dropdown.Item>
//         <Dropdown.Item as="button">Another action</Dropdown.Item>
//         <Dropdown.Item style={{backgroundColor:'yellow'}} as="button">Something else</Dropdown.Item>
//         </DropdownButton> */}
//       </div>
//     );
//   }
// }
 
// export default Alarm;