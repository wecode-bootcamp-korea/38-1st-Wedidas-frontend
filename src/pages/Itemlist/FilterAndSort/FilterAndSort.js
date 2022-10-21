import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import './FilterAndSort.scss';

const FilterAndSort = ({ setIsFilter }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isSelected, setIsSelected] = useState({
    latest: false,
    lowprice: false,
    highprice: false,
    size: false,
  });

  const handleSelected = event => {
    const { name } = event.target;
    setIsSelected({
      ...isSelected,
      [name]: !isSelected[name],
    });
  };

  const clickClose = () => {
    setIsFilter(false);
  };

  const clickReset = () => {
    setIsSelected({
      latest: false,
      lowprice: false,
      highprice: false,
      size: false,
    });
  };

  const onClick = () => {
    searchParams.set('sort', 'latest');
    setSearchParams(searchParams);
  };

  return (
    <div className="filterAndSort">
      <div className="filterAndSortHeader">
        <span>Filter & Sort</span>
        <div className="filterAndSortBtnBox">
          <button
            className="filterAndSortReset"
            onClick={() => {
              clickReset();
              setSearchParams({});
            }}
          >
            모두지우기
          </button>
          <AiOutlineClose onClick={clickClose} className="filterAndSortClose" />
        </div>
      </div>
      <ul>
        <button
          className={`filterAndSortList ${
            isSelected.latest ? 'selected' : 'bordernone'
          }`}
          onClick={handleSelected}
          name="latest"
        >
          최근 순
        </button>
        <button
          className={`filterAndSortList ${
            isSelected.lowprice ? 'selected' : 'bordernone'
          }`}
          onClick={handleSelected}
          name="lowprice"
        >
          가격 낮은 순
        </button>
        <button
          href="#"
          className={`filterAndSortList ${
            isSelected.highprice ? 'selected' : 'bordernone'
          }`}
          onClick={handleSelected}
          name="highprice"
        >
          가격 높은 순
        </button>
        <button
          href="#"
          className={`filterAndSortList ${
            isSelected.size ? 'selected' : 'bordernone'
          }`}
          onClick={handleSelected}
          name="size"
        >
          사이즈
        </button>
        <input type="checkbox" />
        <button onClick={onClick}>클릭하세요</button>
      </ul>
    </div>
  );
};

export default FilterAndSort;
