import React, { useState, useEffect } from 'react';
import ItemListTop from './ItemListTop';
import ItemProduct from '../../components/ItemProduct/ItemProduct';
import FilterAndSort from './FilterAndSort/FilterAndSort';
import './Itemlist.scss';

const Itemlist = () => {
  const [shoesData, setShoesData] = useState([]);
  const [isFilter, setIsFilter] = useState(false);

  useEffect(() => {
    fetch('/data/itemlist.json')
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

  return (
    <div className="itemList" onClick={handleWindow}>
      <ItemListTop clickFilter={clickFilter} />
      <div className="itemListProducts">
        {shoesData.map(item => (
          <ItemProduct key={item.id} data={item} />
        ))}
      </div>
      {isFilter && <FilterAndSort setIsFilter={setIsFilter} />}
    </div>
  );
};
export default Itemlist;
