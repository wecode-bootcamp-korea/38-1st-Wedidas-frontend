import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import './Button.scss';

const Button = props => {
  return (
    <button className="btn">
      {props.btnTitle}
      <BsArrowRight className="arrow" />
    </button>
  );
};

export default Button;
