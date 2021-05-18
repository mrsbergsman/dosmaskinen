import React, { useState } from 'react'
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { changePassword } from '../../redux/actions/authActionCreators';
import './_profile.scss'

const ChangePassword = ({dispatchRegisterAction}) => {

    const [changePassword, setChangePassword] = useState('');

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatchRegisterAction(changePassword,
        () => toast.dark("Your password changed successfully!"),
        // (message) => toast.error(`Error: ${message}`));
        )
      };

    return (
        <div className="ChangePassword-container">
            <form noValidate onSubmit={handleOnSubmit}>
                <div className="form-group text-left1">
                    <label htmlFor="changePassword">New password:</label>
                    <input noValidate id="changePassword"
                    type="text"
                    name="changePassword"
                    placeholder="New password..."
                    value={changePassword}
                    onChange={(e) => setChangePassword(e.target.value)}
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
    dispatchRegisterAction: (changePassword, onSuccess, onError) =>
    dispatch(changePassword({ changePassword}, onSuccess, onError))
  });

export default connect(null, mapDispatchToProps)(ChangePassword);
