import React from 'react';
import LoginForm from '../components/loginForm/LoginForm';

const LoginFormContainer = (props) => {
  return(
    <div className='form-wrapper'>
      <h3>Babylon Login</h3>
      <LoginForm/>
    </div>
  )
}

export default LoginFormContainer;
