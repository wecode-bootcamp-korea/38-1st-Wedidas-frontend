import React, { useState, useEffect } from 'react';
import { useSearchParams, useParams } from 'react-router-dom';
import ItemListTop from './ItemListTop';
import ItemProduct from '../../components/ItemProduct/ItemProduct';
import FilterAndSort from './FilterAndSort/FilterAndSort';
import './Itemlist.scss';

const Itemlist = () => {
  const [shoesData, setShoesData] = useState(null);
  const [isFilter, setIsFilter] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const readGender = useParams();
  const offset = searchParams.get('offset');
  const limit = searchParams.get('limit');

  useEffect(() => {
    fetch(
      `http://10.58.52.165:3000/products/${readGender}&offset=${offset}&limit=${limit}`,
      {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
      }
    )
      .then(res => res.json())
      .then(res => setShoesData(res.data));
  }, [offset, limit]);

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
    searchParams.set('offset', (pagingNum - 1) * 10);
    searchParams.set('limit', 10);
    setSearchParams(searchParams);
  };

  return (
    <div className="itemList" onClick={handleWindow}>
      <ItemListTop clickFilter={clickFilter} />
      <div className="itemListProducts">
        {shoesData?.map(item => (
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
