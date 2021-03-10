import React, {Component} from 'react';
import mainIconwhite from '../../images/mainIconwhite.png';
import './_alarm.scss'

class AlarmForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 

    
      title:'',
      notes:'',
   
      list:[],
     }

  }
  changeTitle (input){
    this.setState({
      title:input
    })
  }

  changeNotes(input){
    this.setState({
     notes:input
    }, () => console.log(input))
  }

  // make clone to the list and push in the input from the user to the array

  addToList(input){
   let listArray = this.state.list

   listArray.push(input);
   
   this.setState({
  
    list: listArray,
    title: "",
    notes:""

   })
  }

  render() { 
    return ( 
      <div>
        <h1 >hej</h1>
        <img className="icon-settings" src={mainIconwhite} alt="pills"/>


        <form>
        <input
        placeholder="Title"
        onChange={(e) => this.changeTitle(e.target.value)} 
        value={this.state.title}
        />

        <input
        placeholder="Time"
        onChange={(e) => this.changeNotes(e.target.value)} 
        value={this.state.notes}
        />
        <input
        placeholder="Notes"
        onChange={(e) => this.changeNotes(e.target.value)} 
        value={this.state.notes}
        />
        </form>
        <button onClick={() => this.addToList(this.state.title)}>Add</button>

        <ul>
        {this.state.list.map((val, i) => (
          <li key={i}>{val}</li>
        ))}
      </ul>
      </div>
     );
  }
}
 
export default AlarmForm;






//-----------------funkar-----------------------------

// import React, {Component} from 'react';


// class Alarm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { 

    
//       title:'',
//       notes:'',
   
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
  
//     list: listArray,
//     title: "",
//     notes:""

//    })
//   }

//   render() { 
//     return ( 
//       <div>
//         <h1>Alarm</h1>
//         <form>
//         <input
//         placeholder="Title"
//         onChange={(e) => this.changeTitle(e.target.value)} 
//         value={this.state.title}
//         />

//         <textarea
//         placeholder="Notes"
//         rows="4" cols="50"
//         onChange={(e) => this.changeNotes(e.target.value)} 
//         value={this.state.notes}
//         />
//         </form>
//         <button onClick={() => this.addToList(this.state.title)}>Add</button>

//         <ul>
//         {this.state.list.map((val, i) => (
//           <li key={i}>{val}</li>
//         ))}
//       </ul>
//       </div>
//      );
//   }
// }
 
// export default Alarm;


//--------------
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