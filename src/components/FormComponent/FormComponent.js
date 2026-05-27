import './FormComponent.css';
import React from 'react';

export function FormComponent(props) {


  return <>
  <div className="FormComponent">
    <div className="left-part">
      <h2>ЗАПОВНІТЬ ВХІД ДО ОБЛІКОВОГО ЗАПИСУ</h2>
    </div>

    <div className="right-part">
      <form>
        <div className="login-and-password">
          <div className="form-settings">
            <label>Електронна пошта або мобільний телефон</label>
            <input></input>
            <p>
              By entering your mobile number and one-time code sign-in option,
              you agree to receive a one-time verification code via SMS from IKEA.
              Message and data rates may apply.
            </p>
            <a href="/">More info about Privacy Policy</a>
        </div>

        <div className="form-settings">
          <label>Пароль</label>
          <input></input>
          <p>Забули свій пароль?</p>
        </div>

        <div className="save-info">
          <input type="checkbox"></input>
          <label>Зберегти інформацію</label>
        </div>

        <button>ПРОДОВЖИТИ</button>

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
