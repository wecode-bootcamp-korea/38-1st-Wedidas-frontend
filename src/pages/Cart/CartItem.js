import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { CiHeart } from 'react-icons/ci';
import { SlArrowDown } from 'react-icons/sl';
import './CartItem.scss';

const CartItem = ({ data, priceToString, setPrice }) => {
  useEffect(() => {
    setPrice(prev => prev + data.price * parseInt(numberOfShoe));
  }, []);
  const [isSelect, setIsSelect] = useState(false);
  const [numberOfShoe, setNumberOfShoe] = useState('1');

  const numberOfShoeClick = e => {
    setNumberOfShoe(e.target.value);
    setPrice(prev => prev + data.price * parseInt(numberOfShoe));
    setIsSelect(false);
  };

  const clickSelectBtn = () => {
    setIsSelect(prev => !prev);
  };

  const clickOutside = e => {
    if (e.target.className !== '.selectList' && isSelect) {
      setIsSelect(false);
    }
  };

  return (
    <div className="cartItem" onClick={clickOutside}>
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
            <span className="cartItemName">{data.name}</span>
            <span className="cartItemPrice">
              {priceToString(data.price * parseInt(numberOfShoe))}원
            </span>
            <AiOutlineClose />
          </div>
          <div className="cartItemHeartBox">
            <p>RED / OFF WHITE / SHOCKBLUE</p>
            <CiHeart />
          </div>
          <p>크기 : 210</p>
        </div>
        <button onClick={clickSelectBtn} className="cartItemSelect">
          {numberOfShoe}
          <SlArrowDown />
        </button>
        {isSelect && (
          <ul className="selectList" onClick={numberOfShoeClick}>
            <li className="listItem" value="1">
              1
            </li>
            <li className="listItem" value="2">
              2
            </li>
            <li className="listItem" value="3">
              3
            </li>
            <li className="listItem" value="4">
              4
            </li>
            <li className="listItem" value="5">
              5
            </li>
            <li className="listItem" value="6">
              6
            </li>
            <li className="listItem" value="7">
              7
            </li>
            <li className="listItem" value="8">
              8
            </li>
            <li className="listItem" value="9">
              9
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default CartItem;
