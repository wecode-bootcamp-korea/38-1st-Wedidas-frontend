import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineRollback } from 'react-icons/ai';
import { ImEqualizer } from 'react-icons/im';
import FilterAndSort from './FilterAndSort/FilterAndSort';
import './ItemListTop.scss';
const ItemListTop = () => {
  const [isFilter, setIsFilter] = useState(false);
  const ref = useRef();
  const navigate = useNavigate();
  const clickFilter = () => {
    setIsFilter(prev => !prev);
  };

  useEffect(() => {
    const clickOutside = e => {
      if (isFilter && ref.current && !ref.current.contains(e.target)) {
        setIsFilter(false);
      }
    };
    document.addEventListener('mousedown', clickOutside);
    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  }, [isFilter]);

  const clickBack = () => {
    navigate('./../');
  };

  const clickGoMain = () => {
    navigate('/');
  };
  return (
    <div ref={ref} className="itemListTop">
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
      {isFilter && <FilterAndSort setIsFilter={setIsFilter} />}
    </div>
  );
};

export default ItemListTop;
