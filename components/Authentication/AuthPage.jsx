/* eslint-disable max-len */
import { useState } from 'react';
import styles from '../../styles/AuthPage.module.css';
import Login from './Login';
import Signup from './Signup';

export default function AuthPage() {
  const [loginState, setLoginState] = useState(true);
  const [signupState, setSignupState] = useState(false);

  return (
    <div className={styles.AuthPageMainContainer}>
      <div className={styles.LoginContainer}>
        {loginState && <Login loginState={loginState} setLoginState={setLoginState} setSignupState={setSignupState} />}
        {signupState && <Signup signupState={signupState} setLoginState={setLoginState} setSignupState={setSignupState} />}
      </div>
    </div>
  );
}
