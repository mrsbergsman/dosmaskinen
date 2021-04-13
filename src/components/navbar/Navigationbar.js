import React, { useState, useEffect } from 'react';
import {NavLink} from 'react-router-dom'
import { FiMenu } from 'react-icons/fi';
import { GrClose } from 'react-icons/gr';
import './_navigationbar.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Navigationbar () {

  useEffect(() => {
    AOS.init({
    });
  }, []);
  
const [showMenu, setShowMenu] = useState(false);

const [toogleAnimtion, setToogleAnimtion] = useState(true);

// toggle hamburgermenu opend/closed and show and hide navbar.
let navbar
let toggle
let menu


if(showMenu === true) {

  toggle = <div className="close"><GrClose/></div>
  console.log(setToogleAnimtion +'hello')
  // toggle = <div data-aos="fade-right"  data-aos-duration="1500" className="close"><GrClose/></div> 
 
  { toogleAnimtion ? (
    menu = 
    <div className="menu-mobile" data-aos="fade-right"  data-aos-duration="1500"> 
        <ul data-aos="fade-up"  data-aos-duration="1000" className="navlinks-hamburger">
          <div style={{marginTop:'50px'}}>
          <NavLink exact to="/home"> 
            <li className='nav-link'>Home</li>
          </NavLink>
          <NavLink exact to="/record"> 
            <li className='nav-link'>Record a message</li>
          </NavLink>
          <NavLink exact to="/information"> 
            <li className='nav-link'>Information</li>
          </NavLink>
          <NavLink exact to="/"> 
            <li style={{marginLeft:"20px"}}className='logout-link'>Log out</li>
          </NavLink>
          </div>
        </ul>
    </div>
  ) : (
    menu =  
    <div className="menu-mobile" data-aos="fade-left"  data-aos-duration="1500"> 
        <ul data-aos="fade-up"  data-aos-duration="1000" className="navlinks-hamburger">
          <div style={{marginTop:'50px'}}>
          <NavLink exact to="/home"> 
            <li className='nav-link'>Home</li>
          </NavLink>
          <NavLink exact to="/record"> 
            <li className='nav-link'>Record a message</li>
          </NavLink>
          <NavLink exact to="/information"> 
            <li className='nav-link'>Information</li>
          </NavLink>
          <NavLink exact to="/"> 
            <li style={{marginLeft:"20px"}}className='logout-link'>Log out</li>
          </NavLink>
          </div>
        </ul>
    </div>
  ) } 

} else {

  toggle = <FiMenu className="open" />
 
  navbar =  
  <div className="navigationbar-container">
  <ul className="navlinks">
    <NavLink className="nav" exact to="/home"> 
      <li className='nav-link'>Home</li>
    </NavLink>
    <NavLink className="nav" exact to="/record"> 
      <li className='nav-link'>Record a message</li>
    </NavLink>
    <NavLink className="nav" exact to="/information"> 
      <li className='nav-link'>Information</li>
    </NavLink>
    <NavLink className="nav" exact to="/"> 
      <li className='logout-link'>Log out</li>
    </NavLink>
  </ul>
</div>
   
}
  return (

    <>
      <nav>
      {navbar}
        <div 
          className="hamburger-menu"
          onClick={() => setShowMenu(!showMenu) && setToogleAnimtion(!toogleAnimtion)} >
          {toggle}
        </div>
      {menu}
      </nav>
    </>
  );
}

export default Navigationbar;



// import React, { useState, useEffect } from 'react';
// import {NavLink} from 'react-router-dom'
// import { FiMenu } from 'react-icons/fi';
// import { GrClose } from 'react-icons/gr';
// import './_navigationbar.scss';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// function Navigationbar () {

//   useEffect(() => {
//     AOS.init({
//     });
//   }, []);
  
// const [showMenu, setShowMenu] = useState(false);


// // toggle hamburgermenu opend/closed and show and hide navbar.
// let navbar
// let toggle
// let menu


// if(showMenu === true) {

//   toggle = <div className="close"><GrClose/></div>
//   // toggle = <div data-aos="fade-right"  data-aos-duration="1500" className="close"><GrClose/></div> 
  
//   menu = 
  
//     <div className="menu-mobile">
//         <ul data-aos="fade-up"  data-aos-duration="1000" className="navlinks-hamburger">
//           <div style={{marginTop:'50px'}}>
//           <NavLink exact to="/home"> 
//             <li className='nav-link'>Home</li>
//           </NavLink>
//           <NavLink exact to="/record"> 
//             <li className='nav-link'>Record a message</li>
//           </NavLink>
//           <NavLink exact to="/information"> 
//             <li className='nav-link'>Information</li>
//           </NavLink>
//           <NavLink exact to="/"> 
//             <li style={{marginLeft:"20px"}}className='logout-link'>Log out</li>
//           </NavLink>
//           </div>
//         </ul>
//     </div>
 
// } else {

//   toggle = <FiMenu className="open"/>
 
//   navbar =  
//   <div className="navigationbar-container">
//   <ul className="navlinks">
//     <NavLink className="nav" exact to="/home"> 
//       <li className='nav-link'>Home</li>
//     </NavLink>
//     <NavLink className="nav" exact to="/record"> 
//       <li className='nav-link'>Record a message</li>
//     </NavLink>
//     <NavLink className="nav" exact to="/information"> 
//       <li className='nav-link'>Information</li>
//     </NavLink>
//     <NavLink className="nav" exact to="/"> 
//       <li className='logout-link'>Log out</li>
//     </NavLink>
//   </ul>
// </div>
   
// }
//   return (

//     <>
//       <nav>
//       {navbar}
//         <div 
//           className="hamburger-menu"
//           onClick={() => setShowMenu(!showMenu)}>
//           {toggle}
//         </div>
//       {menu}
//       </nav>
//     </>
//   );
// }

// export default Navigationbar;


