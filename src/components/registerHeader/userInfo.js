import React from 'react';
import { Link } from 'react-router-dom';
import './_userinfo.scss'

const UserInfo = ({ userName, isLoggedIn, onLogout }) => (
    <>
      <div className="user-container">
        <div className="user-info">
          {isLoggedIn && <h4 className="ml-auto-mr-4">
            <span className="badge badge-pill badge-light">
              Welcome {userName}!
            </span>
          </h4>}
          {isLoggedIn && <Link type="link" onClick={onLogout} className="logout" >
          logout </Link>}
        </div>
      </div>
    </>
);
export default UserInfo;