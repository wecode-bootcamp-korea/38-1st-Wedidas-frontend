import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsCheck2, BsArrowRight } from 'react-icons/bs';
import './Login.scss';

const Login = () => {
  const [userInfoValue, setUserInfoValue] = useState({ email: '', pw: '' });
  const navigate = useNavigate();

  const onChangeId = event =>
    setUserInfoValue({ ...userInfoValue, email: event.target.value });
  const onChangePw = event =>
    setUserInfoValue({ ...userInfoValue, pw: event.target.value });
  const handleOnsubmit = e => {
    e.preventDefault();

    fetch('http://10.58.52.133:3000/users/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: userInfoValue.email,
        password: userInfoValue.pw,
      }),
    })
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('통신실패');
      })
      .then(data => {
        if (data.message === 'INVALID_PASSWORD') {
          alert('비밀번호를 확인해 주세요.');
        } else {
          localStorage.setItem('token', data.accessToken);
          navigate('/');
        }
      });
  };
  // const token = localStorage.getItem('token');
  // console.log(token);
  return (
    <div className="login">
      <div className="loginSection">
        <p className="title">로그인</p>
        <Link className="findPw" to="#!">
          비밀번호를 잊으셨나요
        </Link>
        <form className="loginBox" onSubmit={handleOnsubmit}>
          <div className="inputBox">
            <input
              className="input emailInput"
              type="email"
              placeholder="이메일 *"
              value={userInfoValue.email}
              onChange={onChangeId}
            />
            <span className="alert">
              사용가능한 이메일 주소를 사용해 주세요
            </span>
          </div>
          <div className="inputBox">
            <input
              className="input pwInput"
              type="password"
              placeholder="비밀번호 *"
              value={userInfoValue.pw}
              onChange={onChangePw}
            />
            <span className="alert">패스워드를 입력하세요</span>
          </div>

          <button className="btn loginBtn">
            로그인
            <BsArrowRight className="arrow" />
          </button>
        </form>
      </div>
      <div className="signUpBox">
        <p className="title">가입하기</p>
        <p>아디다스 클럽 멤버십 가입하기 : </p>
        <ul className="signUpListWrap">
          <li>
            <BsCheck2 className="checkIcon" />
            멤버 레벨의 모든 리워드를 바로 누리세요
          </li>
          <li>
            <BsCheck2 className="checkIcon" />
            한정판 제품 구입 기회 제공
          </li>
          <li>
            <BsCheck2 className="checkIcon" />
            스포츠, 요가, 뮤직 이벤트 참여를 위해 레벨업 하세요
          </li>
          <li>
            <BsCheck2 className="checkIcon" />
            아디클럽 멤버를 위한 특별한 혜택과 이벤트를 만나보세요
          </li>
        </ul>
        <p>
          각 레벨별 리워드를 받기 위해 지금 가입하여 포인트를 쌓으세요.
          <br />
          아디다스의 베스트 제품을 지금 만나보세요.
        </p>
        <button className="btn signupBtn">
          가입하기
          <BsArrowRight className="arrow" />
        </button>
      </div>
    </div>
  );
};
export default Login;
