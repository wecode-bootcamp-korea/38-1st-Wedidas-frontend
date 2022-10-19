import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { CiHeart } from 'react-icons/ci';
import { SlArrowDown } from 'react-icons/sl';
import './CartItem.scss';

const CartItem = ({ data, isSelect, setIsSelect }) => {
  const clickSelectBtn = () => {
    setIsSelect(prev => !prev);
  };
  return (
    <div className="cartItem">
      <div>
        <img
          className="cartItemImg"
          alt="장바구니 아이템"
          src={data.thumbnail}
        />
      </div>
      <div className="cartItemContent">
        <div>
          <div className="cartItemXbox">
            <div>
              <span className="cartItemName">{data.name}</span>
              <span calssName="cartItemPrice">{data.price}원</span>
            </div>
            <AiOutlineClose />
          </div>
          <div className="cartItemHeartBox">
            <p>RED / OFF WHITE / SHOCKBLUE</p>
            <CiHeart />
          </div>
          <p>크기 : 210</p>
        </div>
        <button onClick={clickSelectBtn} className="cartItemSelect">
          <p>1</p>
          <SlArrowDown />
        </button>
        {isSelect && (
          <ul className="selectList">
            <li className="listItem">1</li>
            <li className="listItem">2</li>
            <li className="listItem">3</li>
            <li className="listItem">4</li>
            <li className="listItem">5</li>
            <li className="listItem">6</li>
            <li className="listItem">7</li>
            <li className="listItem">8</li>
            <li className="listItem">9</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default CartItem;
