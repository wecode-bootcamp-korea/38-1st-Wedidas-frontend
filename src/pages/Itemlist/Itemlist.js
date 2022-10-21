import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ItemListTop from './ItemListTop';
import ItemProduct from '../../components/ItemProduct/ItemProduct';
import FilterAndSort from './FilterAndSort/FilterAndSort';
import './Itemlist.scss';

const Itemlist = () => {
  const [shoesData, setShoesData] = useState([]);
  const [isFilter, setIsFilter] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const offset = searchParams.get('offset');
  const limit = searchParams.get('limit');

  useEffect(() => {
    fetch(`/data/itemlist.json`)
      .then(res => res.json())
      .then(res => setShoesData(res));
  }, []);

  const handleWindow = e => {
    const clicked = e.target.closest('.filterAndSort');
    if (clicked === null && isFilter) {
      setIsFilter(prev => !prev);
    }
  };

  const clickFilter = () => {
    setIsFilter(prev => !prev);
  };

  const onClick = pagingNum => {
    searchParams.set('offset', (pagingNum - 1) * 8);
    searchParams.set('limit', 8);
    setSearchParams(searchParams);
  };

  return (
    <div className="itemList" onClick={handleWindow}>
      <ItemListTop clickFilter={clickFilter} />
      <div className="itemListProducts">
        {shoesData.map(item => (
          <ItemProduct key={item.id} data={item} />
        ))}
      </div>
      {isFilter && <FilterAndSort setIsFilter={setIsFilter} />}
      <div className="pagination">
        <button
          onClick={() => {
            onClick(1);
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            onClick(2);
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            onClick(3);
          }}
        >
          3
        </button>
      </div>
    </div>
  );
};
export default Itemlist;
