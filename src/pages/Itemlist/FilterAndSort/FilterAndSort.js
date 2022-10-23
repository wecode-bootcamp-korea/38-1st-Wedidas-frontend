import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import './FilterAndSort.scss';

const FilterAndSort = ({
  setIsFilter,
  clickSortLatest,
  clickSortPrice,
  sortReset,
}) => {
  const [isSelected, setIsSelected] = useState({
    latest: false,
    lowprice: false,
    highprice: false,
    size: false,
  });
  const clickReset = () => {
    setIsSelected({
      latest: false,
      lowprice: false,
      highprice: false,
      size: false,
    });
    sortReset();
  };
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
  return (
    <div className="filterAndSort">
      <div className="filterAndSortHeader">
        <span>Filter & Sort</span>
        <div className="filterAndSortBtnBox">
          <button
            className="filterAndSortReset"
            onClick={() => {
              clickReset();
            }}
          >
            모두지우기
          </button>
          <AiOutlineClose onClick={clickClose} className="filterAndSortClose" />
        </div>
      </div>
      <form
        onClick={e => {
          e.preventDefault();
        }}
      >
        <button
          type="radio"
          className={`filterAndSortList ${
            isSelected.latest ? 'selected' : 'bordernone'
          }`}
          onClick={e => {
            clickReset();
            handleSelected(e);
            clickSortLatest(isSelected.latest);
          }}
          name="latest"
        >
          최근 순
        </button>
        <button
          type="radio"
          className={`filterAndSortList ${
            isSelected.lowprice ? 'selected' : 'bordernone'
          }`}
          onClick={e => {
            clickReset();
            handleSelected(e);
            clickSortPrice(isSelected.price);
          }}
          name="lowprice"
        >
          가격 낮은 순
        </button>
        <button
          type="radio"
          className={`filterAndSortList ${
            isSelected.highprice ? 'selected' : 'bordernone'
          }`}
          onClick={e => {
            clickReset();
            handleSelected(e);
            clickSortPrice(isSelected.price);
          }}
          name="highprice"
        >
          가격 높은 순
        </button>
        <button
          type="radio"
          className={`filterAndSortList ${
            isSelected.size ? 'selected' : 'bordernone'
          }`}
          onClick={handleSelected}
          name="size"
        >
          사이즈
        </button>
      </form>
    </div>
  );
};

export default FilterAndSort;
