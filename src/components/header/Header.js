

import React from 'react';
import UserInfo from '../registerHeader/userInfo';
import './_header.scss'
const Header = ()=>{
  return (
    <>
      <div className="header-container">
        <div className="logo-box">
          <p className="logo">MedicMinder</p>
        </div>
      </div>
      <UserInfo/>
    </>
  )
}
export default Header





// import React from 'react';
// import UserInfo from '../registerHeader/userInfo';
// import './_header.scss'
// const Header = ()=>{
//   return (
//     <>
//       <div className="header-container">
//         <div className="logo-box">
//           <p className="logo">MedicMinder</p>
//         </div>
//       </div>
//       <UserInfo/>
//     </>
//   )
// }
// export default Header




