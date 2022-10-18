import React, { useState } from 'react';
import './SignUpForm.scss';
const SignUpForm = () => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    name: '',
    birthday: '',
    phone_number: '',
  });
  const handleInput = event => {
    const { name, value } = event.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };
  const signUp = event => {
    event.preventDefault();
    fetch('api', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        email: userInfo.email,
        password: userInfo.password,
        name: userInfo.name,
        birthday: parseInt(userInfo.birthday),
        phone_number: parseInt(userInfo.phone_number),
      }),
    });
  };

  return (
    <form onSubmit={signUp} className="signUpForm">
      <h3 className="signUpText">회원가입</h3>
      <input
        className="inputBox"
        placeholder="이름을 입력하세요"
        type="text"
        onChange={handleInput}
        name="name"
      />
      <input
        className="inputBox"
        placeholder="이메일을 입력하세요"
        type="email"
        onChange={handleInput}
        name="email"
      />
      <input
        className="inputBox"
        placeholder="패스워드를 입력하세요"
        type="password"
        onChange={handleInput}
        name="password"
      />
      <input
        className="inputBox"
        placeholder="전화번호를 입력하세요"
        type="tel"
        onChange={handleInput}
        name="phone_number"
      />
      <input
        className="inputBox"
        placeholder="생년월일을 입력하세요 예)20001231"
        type="tel"
        onChange={handleInput}
        name="birthday"
      />
      <button className="btn">회원가입</button>
    </form>
  );
};
export default SignUpForm;
