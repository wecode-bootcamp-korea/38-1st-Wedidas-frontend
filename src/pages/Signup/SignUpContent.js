import React from 'react';
import './SignUpContent.scss';

const SignUpContent = () => {
  return (
    <div className="signUpContent">
      <h3 className="freeSignUpText">아디클럽 무료 가입</h3>
      <ul className="benefitBox">
        <li className="benefitBoxList">
          <span className="freeDeliverIcon" />
          <h6>5만원 이상 무료배송</h6>
        </li>
        <li className="benefitBoxList">
          <span className="couponIcon" />
          <h6>할인쿠폰</h6>
        </li>
        <li className="benefitBoxList">
          <span className="savingIcon" />
          <h6>포인트 적립</h6>
        </li>
      </ul>
      <p>
        아디클럽 멤버들은 최고의 아디다스 경험을 할 수 있습니다. 5만원 이상
        무료배송, 익스클루시브, 할인 혜택을 받으세요. 아디클럽에 가입하시려면
        먼저 통신사를 통해 본인인증을 받아야 합니다.
      </p>
    </div>
  );
};

export default SignUpContent;
