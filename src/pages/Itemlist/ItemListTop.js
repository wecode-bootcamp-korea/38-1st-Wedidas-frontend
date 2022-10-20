import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineRollback } from 'react-icons/ai';
import { ImEqualizer } from 'react-icons/im';
import './ItemListTop.scss';

const ItemListTop = ({ clickFilter }) => {
  const navigate = useNavigate();
  const clickBack = () => {
    navigate(-1);
  };

  const clickGoMain = () => {
    navigate('/');
  };

  return (
    <div className="itemListTop">
      <div className="itemListTopToolBox">
        <span className="itemListTopBack underLine" onClick={clickBack}>
          <AiOutlineRollback />
          뒤로가기
        </span>
        <span className="itemListTopText underLine" onClick={clickGoMain}>
          Home
        </span>
        <span className="itemListTopText">/ Men</span>
      </div>
      <div className="itemListTopFlex">
        <div className="itemListTopCategoryAndItemNum">
          <h4 className="itemListTopCategory">MEN</h4>
          <span className="itemListTopItemNum">[2587]</span>
        </div>
        <button onClick={clickFilter} className="filterAndSortBtn">
          Filter & Sort
          <ImEqualizer />
        </button>
      </div>
    </div>
  );
};

export default ItemListTop;
