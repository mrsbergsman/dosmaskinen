import React from 'react';
import './_userinfo.scss'

const UserInfo = ({isLoggedIn,userName, onLogout}) => (
<div className="user-wrapper">
    <div className="user-container">
      {isLoggedIn && <p className="user-info">
        <span className="user-badge">
          Welcome {userName}!
        </span>
          {isLoggedIn &&  <span onClick={onLogout} className="logout" >
        logout  </span>}
      </p>
      }
    </div>
  </div>
  
);
export default UserInfo;
