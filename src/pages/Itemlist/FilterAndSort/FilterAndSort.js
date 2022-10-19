import React, { useState } from 'react';
import './FilterAndSort.scss';
import { AiOutlineClose } from 'react-icons/ai';

const FilterAndSort = ({ setIsFilter }) => {
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
  return (
    <div className="filterAndSort">
      <div className="filterAndSortHeader">
        <span>Filter & Sort</span>
        <div className="filterAndSortBtnBox">
          <a href="#" className="filterAndSortReset" onClick={clickReset}>
            모두지우기
          </a>
          <a onClick={clickClose} href="#" className="filterAndSortClose">
            <AiOutlineClose />
          </a>
        </div>
      </div>
      <ul>
        <a
          href="#"
          className={
            isSelected.latest
              ? 'filterAndSortList selected'
              : 'filterAndSortList'
          }
          onClick={handleSelected}
          name="latest"
        >
          최근 순
        </a>
        <a
          href="#"
          className={
            isSelected.lowprice
              ? 'filterAndSortList selected'
              : 'filterAndSortList'
          }
          onClick={handleSelected}
          name="lowprice"
        >
          가격 낮은 순
        </a>
        <a
          href="#"
          onClick={handleSelected}
          className={
            isSelected.highprice
              ? 'filterAndSortList selected'
              : 'filterAndSortList'
          }
          name="highprice"
        >
          가격 높은 순
        </a>
        <a
          href="#"
          className={
            isSelected.size ? 'filterAndSortList selected' : 'filterAndSortList'
          }
          onClick={handleSelected}
          name="size"
        >
          사이즈
        </a>
        <input type="checkbox" />
      </ul>
    </div>
  );
};

export default FilterAndSort;
