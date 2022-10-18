import React from 'react';
import Signupform from './SignUpForm';
import './Signup.scss';
import Signupcontent from './SignUpContent';

const Signup = () => {
  return (
    <div className="signUp">
      <Signupform />
      <Signupcontent />
    </div>
  );
};
export default Signup;
