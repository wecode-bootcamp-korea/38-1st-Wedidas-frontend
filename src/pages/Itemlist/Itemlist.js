import React, { useState, useEffect } from 'react';
import { useSearchParams, useParams, Link } from 'react-router-dom';
import ItemListTop from './ItemListTop';
import ItemProductList from '../../components/ItemProduct/ItemProductList';
import FilterAndSort from './FilterAndSort/FilterAndSort';
import './Itemlist.scss';

const Itemlist = () => {
  const EIGHT = 8;
  const [shoesData, setShoesData] = useState([]);
  const [isFilter, setIsFilter] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({
    sort: '',
    offset: 0,
    limit: EIGHT,
  });
  const gender = useParams();
  const offset = searchParams.get('offset');
  const limit = searchParams.get('limit');
  const sort = searchParams.get('sort');

  useEffect(() => {
    fetch(
      `http://10.58.52.108:3000/products/${gender.gender}?sort=${sort}&offset=${offset}&limit=${limit}`,
      {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
      }
    )
      .then(res => res.json())
      .then(res => setShoesData(res.data));
  }, [gender.gender, offset, limit, sort]);

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
    searchParams.set('offset', (pagingNum - 1) * EIGHT);
    searchParams.set('limit', EIGHT);
    setSearchParams(searchParams);
  };

  const clickSort = isSelected => {
    setSearchParams({ sort: isSelected, offset: 0, limit: EIGHT });
  };

  const sortReset = () => {
    setSearchParams({ sort: '', offset: 0, limit: EIGHT });
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
          sortReset={sortReset}
          clickSort={clickSort}
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
