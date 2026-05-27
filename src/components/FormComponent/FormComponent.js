import './FormComponent.css';
import React, { useState } from 'react';

export function FormComponent(props) {

  const [state, setState] = useState ({
    email: '',
    password: '',
    emailValid: false,
    passwordValid: false
  });

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  function validatePassword(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
  }

  function onEmailChange(e) {
    var val = e.target.value;
    var valid = validateEmail(val);
    setState({...state, email: val, emailValid: valid});
  }
  function onPasswordChange(e) {
    var val = e.target.value;
    var valid = validatePassword(val);
    setState({...state, password: val, passwordValid: valid});
  }

  function handleSubmit(e) {
    if (state.emailValid === true && state.passwordValid === true) {
      alert("Success!");
    }
    else {
      e.preventDefault();
    }
  }

  var emailValidView = state.emailValid===true?"valid":"invalid";
  var passwordValidView = state.passwordValid===true?"valid":"invalid";

  return <>
  <div className="FormComponent">
    <div className="left-part">
      <h2>ЗАПОВНІТЬ ВХІД ДО ОБЛІКОВОГО ЗАПИСУ</h2>
    </div>

    <div className="right-part">
      <form onSubmit={handleSubmit}>
        <div className="login-and-password">
          <div className="form-settings">
            <label>Електронна пошта або мобільний телефон</label>
            <input
            type="text"
            value={state.email}
            onChange={onEmailChange}
            ></input>
            <p className="agreeing">
              By entering your mobile number and one-time code sign-in option,
              you agree to receive a one-time verification code via SMS from IKEA.
              Message and data rates may apply.
            </p>
            <a href="/" className="agreeing">More info about Privacy Policy</a>
        </div>

        <div className="form-settings">
          <label>Пароль</label>
          <input
          type="password"
          value={state.password}
          onChange={onPasswordChange}></input>
          <p className="password-forgot">Забули свій пароль?</p>
        </div>

        <div className="save-info">
          <input type="checkbox"></input>
          <label>Зберегти інформацію</label>
        </div>

        <button className="continue"
        type="submit">ПРОДОВЖИТИ</button>

        <div className="create-account">
          <p>У вас ще немає облікового запису? Створіть його:</p>
          <button>СТВОРИТИ АКАУНТ</button>
        </div>
        </div>
        
      </form>
    </div>
  </div>
  </>
}

export default FormComponent;
