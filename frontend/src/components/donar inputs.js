import React, {useState} from 'react';
import './style.css'
function RegistrationForm() {
    return(
      <div className="form">
          <div className="form-body">
              <div className="username">
                  <label className="form__label" for="firstName">Donar Name </label>
                  <input className="form__input" type="text" id="firstName" placeholder="Donar Name"/>
              </div>
              <div className="email">
                  <label className="form__label" for="email">Charity or NGO Name </label>
                  <input  type="email" id="email" className="form__input" placeholder="name of the charity or ngo "/>
              </div>
              <div className="confirm-password">
                  <label className="form__label" for="confirmPassword">Amount to Donate</label>
                  <input className="form__input" type="text" id="confirmPassword" placeholder="Enter Your Amount to donate"/>
              </div>
          </div>
          <div class="footer">
              <button type="submit" class="btn">Donate</button>
          </div>
      </div>      
    )       
}
export default RegistrationForm;