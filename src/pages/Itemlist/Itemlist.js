import React, { useState, useEffect } from 'react';
import { useSearchParams, useParams } from 'react-router-dom';
import ItemListTop from './ItemListTop';
import ItemProductList from '../../components/ItemProduct/ItemProduct';
import FilterAndSort from './FilterAndSort/FilterAndSort';
import './Itemlist.scss';

const Itemlist = () => {
  const [shoesData, setShoesData] = useState(null);
  const [isFilter, setIsFilter] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const gender = useParams();

  const offset = searchParams.get('offset');
  const limit = searchParams.get('limit');
  const sortPrice = searchParams.get('sortPrice');
  const sort = searchParams.get('sort');

  useEffect(() => {
    fetch(
      `http://10.58.52.165:3000/products/${gender.gender}?offset=${offset}&limit=${limit}`,
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

  const pagination = pagingNum => {
    searchParams.set('offset', (pagingNum - 1) * 10);
    searchParams.set('limit', 10);
    setSearchParams(searchParams);
  };

  const clickSortLatest = isTrue => {
    if (!isTrue) {
      searchParams.set('sort', 'latest');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ offset: 0, limit: 8 });
    }
    fetch(
      `http://10.58.52.165:3000/products/${gender.gender}?offset=0&limit=8&sort=${sort}`,
      {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
      }
    )
      .then(res => res.json())
      .then(res => setShoesData(res.data));
  };
  const clickSortPrice = isTrue => {
    if (!isTrue) {
      searchParams.set('sortPrice', 'low');
      setSearchParams(searchParams);
    } else {
      searchParams.set('sortPrice', 'high');
      setSearchParams(searchParams);
    }
    fetch(
      `http://10.58.52.165:3000/products/${gender.gender}?offset=0&limit=8&sortPrice=${sortPrice}`,
      {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
      }
    )
      .then(res => res.json())
      .then(res => setShoesData(res.data));
  };
  return (
    <div className="itemList" onClick={handleWindow}>
      <ItemListTop
        clickFilter={clickFilter}
        gender={gender.gender}
        shoesData={shoesData}
      />
      <div className="itemListProducts">
        {shoesData?.map(item => (
          <ItemProductList key={item.id} data={item} />
        ))}
      </div>
      {isFilter && (
        <FilterAndSort
          setIsFilter={setIsFilter}
          clickSortLatest={clickSortLatest}
          clickSortPrice={clickSortPrice}
        />
      )}
      <div className="pagination">
        <button
          className="pagingBtn"
          onClick={() => {
            pagination(1);
          }}
        >
          1
        </button>
        <button
          className="pagingBtn"
          onClick={() => {
            pagination(2);
          }}
        >
          2
        </button>
        <button
          className="pagingBtn"
          onClick={() => {
            pagination(3);
          }}
        >
          3
        </button>
      </div>
    </div>
  );
};
export default Itemlist;
