import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import './FilterAndSort.scss';

const FilterAndSort = ({ setIsFilter, clickSortLatest, clickSortPrice }) => {
  const [isSelected, setIsSelected] = useState({
    latest: false,
    price: null,
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
      price: false,
      size: false,
    });
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
      <ul>
        <button
          className={`filterAndSortList ${
            isSelected.latest ? 'selected' : 'bordernone'
          }`}
          onClick={e => {
            handleSelected(e);
            clickSortLatest(isSelected.latest);
          }}
          name="latest"
        >
          최근 순
        </button>
        <form
          onClick={e => {
            e.preventDefault();
          }}
        >
          <button
            className={`filterAndSortList ${
              isSelected.price ? 'selected' : 'bordernone'
            }`}
            onClick={e => {
              handleSelected(e);
              clickSortPrice(isSelected.price);
            }}
            name="price"
          >
            가격 낮은 순
          </button>
          <button
            type="radio"
            className={`filterAndSortList ${
              isSelected.price ? 'bordernone' : 'selected'
            }`}
            onClick={e => {
              handleSelected(e);
              clickSortPrice(isSelected.price);
            }}
            name="price"
          >
            가격 높은 순
          </button>
        </form>
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
      </ul>
    </div>
  );
};

export default FilterAndSort;
