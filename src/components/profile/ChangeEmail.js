import React, { useState } from 'react'
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { changeemail } from '../../redux/actions/authActionCreators';
import './_profile.scss'

const ChangeEmail = ({dispatchRegisterAction}) => {

    const [changeEmail, setChangeEmail] = useState('');

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatchRegisterAction(ChangeEmail,
        () => toast.dark("Your email changed successfully!"),
        // (message) => toast.error(`Error: ${message}`));
        )
      };

    return (
        <div className="ChangeEmail-container">
            <form noValidate onSubmit={handleOnSubmit}>
                <div className="form-group text-left1">
                    <label htmlFor="changeEmail">New email address:</label>
                    <input noValidate id="changeEmail"
                    type="text"
                    name="ChangeEmail"
                    placeholder="New email address..."
                    value={changeEmail}
                    onChange={(e) => setChangeEmail(e.target.value)}
                    className="form-control" />
                </div>
                <div className="change-box2">
                    <button type="submit" className="changePassword-btn"> Change </button>
                </div>
          </form>
        </div>
    )
};
const mapDispatchToProps = dispatch => ({
    dispatchRegisterAction: (changeEmail, onSuccess, onError) =>
    dispatch(changeEmail({ changeEmail}, onSuccess, onError))
  });

export default connect(null, mapDispatchToProps)(ChangeEmail);