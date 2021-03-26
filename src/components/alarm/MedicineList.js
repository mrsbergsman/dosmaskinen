import React, {Component} from 'react';
import './_medicineList.scss'
import { HiCheckCircle } from 'react-icons/hi';
import {RiDeleteBackFill} from 'react-icons/ri';

// tror detta måste vara en funktions komponent
class MedicineList extends Component {

  constructor(props){
    super(props)
    this.state = {
      pills:"",
      list:[]
    }
  }

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
    var context = this;
    return this.state.list.map(function(pill, i){
      const { pills } = pill
      return(
        
        <ul className="pill-list" key={"pill-" + i}>
        <li className="pill">{pills}</li>
        <RiDeleteBackFill
        className="delete-pill"
        onClick={context.handleDeletedPill.bind(context, i)}
        />

        </ul>
      
      )
    })
  }

  render(){
    return(
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
    )
  }
}
export default MedicineList;


// backup-----------------------
// import React, {Component} from 'react';
// import './_medicineList.scss'
// import { HiCheckCircle } from 'react-icons/hi';
// import {RiDeleteBackFill} from 'react-icons/ri';

// // tror detta måste vara en funktions komponent
// class MedicineList extends Component {

//   constructor(props){
//     super(props)
//     this.state = {
//       pills:"",
//       list:[]
//     }
//   }

//   updatePills(event){
   
//     this.setState({
//     pills:event.target.value

//     })
//   }

//   handleList(){
   
//   let list = [...this.state.list]

//   list.push({
//     pills:this.state.pills
//   })
//    this.setState({
//      list:list,
//      pills:"",
//    })
//   }

//   handleDeletedPill(i){
//     let updatedList = [...this.state.list];
//     updatedList.splice(i,1)
//     this.setState({
//       list:updatedList
//     })

//   }
//   renderList(){
//     var context = this;
//     return this.state.list.map(function(pill, i){
//       const { pills } = pill
//       return(
        
//         <ul className="pill-list" key={"pill-" + i}>
//         <li className="pill">{pills}</li>
//         <RiDeleteBackFill
//         className="delete-pill"
//         onClick={context.handleDeletedPill.bind(context, i)}
//         />

//         </ul>
      
//       )
//     })
//   }

//   render(){
//     return(
//      <div className="list-container">
//       <input
//       className="input-pill"
//       type="text"
//       value={this.state.pills}
//       onChange={this.updatePills.bind(this)}
      
//       />
//       <HiCheckCircle
//         className="add-pill"
//         onClick={this.handleList.bind(this)}
//         />

//       <div>{this.renderList()}</div>
//       </div>
//     )
//   }
// }
// export default MedicineList;