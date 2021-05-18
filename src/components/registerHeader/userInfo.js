
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './_userinfo.scss'
// const UserInfo = ({isLoggedIn,userName, onLogout}) => (
//   <>
//     <div className="user-container">
//         {isLoggedIn && <p className="user-info">
//             <span className="user-badge">
//             Welcome {userName}!
//             </span>
//             {isLoggedIn && <Link type="link" onClick={onLogout} className="logout" >
//             logout  </Link>}
//           </p>}
//       </div>
//     </>
// );
// export default UserInfo;





import React from 'react';
import { Link } from 'react-router-dom';
import './_userinfo.scss'

const UserInfo = ({isLoggedIn,userName, onLogout}) => (
 
    <div className="user-wrapper">
      <div className="user-container">
          {isLoggedIn && <p className="user-info">
              <span className="user-badge">
              Welcome {userName}!
              </span>
              {isLoggedIn && <Link type="link" onClick={onLogout} className="logout" >
              logout  </Link>}
            </p>}
        </div>
    </div>
  
);
export default UserInfo;
