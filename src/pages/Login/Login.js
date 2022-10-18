import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';
import { BsCheck2, BsArrowRight } from 'react-icons/bs';

const Login = () => {
  return (
    <div className="login">
      <div className="loginSection">
        <h2 className="title">로그인</h2>
        <Link className="findPw" to="#!">
          비밀번호를 잊으셨나요
        </Link>
        <form className="loginBox">
          <div className="inputBox">
            <input
              className="input emailInput"
              type="email"
              placeholder="이메일 *"
            />
            <span>사용가능한 이메일 주소를 사용해 주세요</span>
          </div>
          <div className="inputBox">
            <input
              className="input pwInput"
              type="password"
              placeholder="비밀번호 *"
            />
            <span>패스워드를 입력하세요</span>
          </div>

          <button className="btn loginBtn">
            로그인
            <BsArrowRight className="arrow" />
          </button>
        </form>
      </div>
      <div className="signUpBox">
        <h2 className="title">가입하기</h2>
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
