import React, { useState } from 'react'
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { changePhone } from '../../redux/actions/authActionCreators';
import './_profile.scss'

const ChangePhone = ({dispatchRegisterAction}) => {

    const [changePhone, setChangePhone] = useState('');

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatchRegisterAction(changePhone,
        () => toast.dark("Your phone number changed successfully!"),
        // (message) => toast.error(`Error: ${message}`));
        )
      };

    return (
        <div className="ChangePhone-container">
            <form noValidate onSubmit={handleOnSubmit}>
                <div className="form-group text-left1">
                    <label htmlFor="changePhone">New phone number :</label>
                    <input noValidate id="changePhone"
                    type="text"
                    name="changePhone"
                    placeholder="New phone number..."
                    value={changePhone}
                    onChange={(e) => setChangePhone(e.target.value)}
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
    dispatchRegisterAction: (changePhone, onSuccess, onError) =>
    dispatch(changePhone({ changePhone}, onSuccess, onError))
  });

export default connect(null, mapDispatchToProps)(ChangePhone);
