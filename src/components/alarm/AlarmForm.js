import React, {Component} from 'react';


class AlarmForm extends Component {
  constructor(props) {
    super(props);

    this.state = {

    info: {
      message: "",
      title:"",
    } , 

      items: [],
      
    }
  }

  //event handler to update the input
  updateMessage(event) {
    this.setState({
      message: event.target.value
    });
  }

  updateTitle(event) {
    this.setState({
      title: event.target.value
    });
  }


  //push messeg in to items
  handleClick() {
    
    var items = this.state.items;

    items.push(this.state.info);
    

    this.setState({
      items: items,
      message: "",
      title:"",
    });
    // var items = this.state.items;

    // items.push(this.state.message);
    // items.push(this.state.title);

    // this.setState({
    //   items: items,
    //   message: "",
    //   title:"",
    // });
  }

  handleItemChanged(i, event) {
    var items = this.state.items;
    items[i]  = event.target.value;

    this.setState({
      items: items
    });
  }

  handleItemDeleted(i) {
    var items = this.state.items;

    items.splice(i, 1);

    this.setState({
      items: items
    });
  }


  //render the items in the table
  //function that returns rendered JSX

  renderRows() {
    //ref to this, for nested returns on input and button
    var context = this;

    return  this.state.items.map(function(o, i) {
              return (
                <tr key={"item-" + i}>
                  <td>
                    <input
                      type="text"
                      value={o}
                      onChange={context.handleItemChanged.bind(context, i)}
                    />
                  </td>
                    <td>
                    {/* <input
                      type="text"
                      value={o}
                      onChange={context.handleItemChanged.bind(context, i)}
                    /> */}
                  </td>
                  
                  <td>
                    <button
                      onClick={context.handleItemDeleted.bind(context, i)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            });
  }

  render() {
    return (
      <div>
        <table className="">
          <thead>
            <tr>
              <th>
                Medecin
              </th>
              <th>
                time
              </th>
              <th>
                notis
              </th>              
              <th>
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
        <hr/>
        <input
          type="text"
          value={this.state.message}
          onChange={this.updateMessage.bind(this)}
        />
          <input
          type="text"
          value={this.state.title}
          onChange={this.updateTitle.bind(this)}
          
        />
        <button
          onClick={this.handleClick.bind(this)}
        >
          Add Item
        </button>
      </div>
    );
  }
}
 
export default AlarmForm;

//---------------backup

// import React, {Component} from 'react';


// class AlarmForm extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {

//     message: "",
//     title:"",
//       items: [],
      
//     }
//   }

//   //event handler to update the input
//   updateMessage(event) {
//     this.setState({
//       message: event.target.value
//     });
//   }

//   updateTitle(event) {
//     this.setState({
//       title: event.target.value
//     });
//   }


//   //push messeg in to items
//   handleClick() {
    
//     var items = this.state.items;

//     items.push(this.state.message);
//     items.push(this.state.title);

//     this.setState({
//       items: items,
//       message: "",
//       title:"",
//     });
//   }

//   handleItemChanged(i, event) {
//     var items = this.state.items;
//     items[i]  = event.target.value;

//     this.setState({
//       items: items
//     });
//   }

//   handleItemDeleted(i) {
//     var items = this.state.items;

//     items.splice(i, 1);

//     this.setState({
//       items: items
//     });
//   }


//   //render the items in the table
//   //function that returns rendered JSX

//   renderRows() {
//     //ref to this, for nested returns on input and button
//     var context = this;

//     return  this.state.items.map(function(o, i) {
//               return (
//                 <tr key={"item-" + i}>
//                   <td>
//                     <input
//                       type="text"
//                       value={o}
//                       onChange={context.handleItemChanged.bind(context, i)}
//                     />
//                   </td>
//                     <td>
//                     {/* <input
//                       type="text"
//                       value={o}
//                       onChange={context.handleItemChanged.bind(context, i)}
//                     /> */}
//                   </td>
                  
//                   <td>
//                     <button
//                       onClick={context.handleItemDeleted.bind(context, i)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               );
//             });
//   }

//   render() {
//     return (
//       <div>
//         <table className="">
//           <thead>
//             <tr>
//               <th>
//                 Medecin
//               </th>
//               <th>
//                 time
//               </th>
//               <th>
//                 notis
//               </th>              
//               <th>
//                 Delete
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.renderRows()}
//           </tbody>
//         </table>
//         <hr/>
//         <input
//           type="text"
//           value={this.state.message}
//           onChange={this.updateMessage.bind(this)}
//         />
//           <input
//           type="text"
//           value={this.state.title}
//           onChange={this.updateTitle.bind(this)}
          
//         />
//         <button
//           onClick={this.handleClick.bind(this)}
//         >
//           Add Item
//         </button>
//       </div>
//     );
//   }
// }
 
// export default AlarmForm;

//---------------stylad-----

// import React, {Component} from 'react';
// import mainIconwhite from '../../images/mainIconwhite.png';
// import clockIconTransp from '../../images/clockIconTransp.png';
// import messIconTransp from '../../images/messIconTransp.png';                                            
// import './_alarm.scss'

// class AlarmForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { 

 
//     title:'',
//     notes:'',


//       list:[],
//      }

//   }
//   changeTitle (input){
//     this.setState({
//       title:input
//     })
//   }

//   changeNotes(input){
//     this.setState({
//      notes:input
//     }, () => console.log(input))
//   }

//   // make clone to the list and push in the input from the user to the array

//   addToList(input){
//    let listArray = this.state.list

//    listArray.push(input);
   
//    this.setState({

//   //clear form
//     list: listArray,
//     title: "",
//     notes:""

//    })
//   }

//   render() { 
//     return ( 
//      <div className="alarmForm-container"> 

//         <div className="form-container">
//           <div className="name">
//             <img className="icon-settings" src={mainIconwhite} alt="pills"/>
//             <h3 className="h3">MEDICINE</h3>
//             <p className="paragraph">Write names of the medicines</p>
//             <input
//             className="input-felt"
//             placeholder=" ex. Alvedon, Ipren.. "
//             onChange={(e) => this.changeTitle(e.target.value)} 
//             value={this.state.title}
//             />
//           </div>
//           <div className="time">
//             <img className="icon-settings" src={clockIconTransp} alt="clock"/>
//             <h3 className="h3">SET TIME</h3>
//             <p className="paragraph">When to take the medicine?</p>
//             <input
//             className="input-felt"
//             placeholder=" Time"
//             onChange={(e) => this.changeNotes(e.target.value)} 
//             value={this.state.notes}
//             />
//           </div>
//           <div className="notes">
//             <img className="icon-settings" src={messIconTransp} alt="letter"/>
//             <h3 className="h3">MESSAGE/alarm</h3>
//             <p className="paragraph">Add your own message</p>
//             <input
//             className="input-felt"
//             placeholder=" ex. Taken with a meal.."
//             onChange={(e) => this.changeNotes(e.target.value)} 
//             value={this.state.notes}
//             />
            
       
//           </div>
//           <div>
//           <button className="add-btn" onClick={() => this.addToList(this.state.title)}><b>ADD</b></button>
//           </div> 

//         </div>
//         <div className="table-container">
//         <table>
//           <th>Title</th>
//           <th>Time</th>
//           <th>Nots</th>
//           <th>Delete</th>
//           <tr>
//           {this.state.list.map((val, i) => (
//           <td key={i}>{val}</td>
//         ))}
//           </tr>
//         </table>
//         </div>
//       </div>
//      );
//   }
// }
 
// export default AlarmForm;



//-------------- table---------------------------------------
// import React,{Component} from 'react';
// import './_alarm.scss'

// class AlarmForm extends Component {

//   constructor(props) {
//     super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
//     this.state = { //state is by default an object
//        info: [
//           { id: 1, title: 'alvedon, ipren, panodil', time: '08:00', notes: 'tas rikligt med vatten' },
//           { id: 2, title: 'bla bla ', time: '12:30', notes: 'i sambans med måltid' },
//           { id: 3, title: 'bla ', time: '16:30', notes: 'bla bla ' },
//           { id: 4, title: 'bla', time: '20:00', notes: ' bla bla' }
//        ]
//     }
//  }

//  renderTableData() {
//   return this.state.info.map((item, index) => {
//      const { id, title, time, notes } = item //destructuring
//      return (
//         <tr key={id}>
//            <td>{id}</td>
//            <td>{title}</td>
//            <td>{time}</td>
//            <td>{notes}</td>
//         </tr>
//      )
//   })
// }

// render() {
//   return (
//      <div>
       
//         <table id='info'>
//            <tbody>
//               {this.renderTableData()}
//            </tbody>
//         </table>
//      </div>
//   )
// }
// renderTableHeader() {
//   let header = Object.keys(this.state.info[0])
//   return header.map((key, index) => {
//      return <th key={index}>{key.toUpperCase()}</th>
//   })
// }

// render() {
//   return (
//      <div  id="table-container">
       
//         <table id='info'>
//            <tbody>
//               <tr>{this.renderTableHeader()}</tr>
//               {this.renderTableData()}
//            </tbody>
//         </table>
//      </div>
//   )
// }
// }




// export default AlarmForm;