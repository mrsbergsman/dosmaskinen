import React from 'react';
import { withRouter } from "react-router-dom";
import { ACCESS_TOKEN_NAME } from '../../constants/apiConstants';
import './_registerHeader.scss'


function RegisterHeader(props) {

    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    let title = capitalize(props.location.pathname.substring(1,props.location.pathname.length))
        if(props.location.pathname === '/') {
         title = 'Welcome'
    }

    function renderLogout() {
        if(props.location.pathname === '/start'){
            return(
                <div className="ml-auto">
                    <button className="btn btn-danger" onClick={() => handleLogout()}>Logout</button>
                </div>
            )
        }
    }

    function handleLogout() {
        localStorage.removeItem(ACCESS_TOKEN_NAME)
        props.history.push('/login')
    }

    return(
        <nav className="register-nav">
            <div className="register-nav-text">
                <span className="h3">{props.title || title}</span>
                {renderLogout()}
            </div>
        </nav>
    )
}
export default withRouter(RegisterHeader);