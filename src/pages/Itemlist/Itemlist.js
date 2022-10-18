import React, { useState, useEffect } from 'react';
import './Itemlist.scss';
import ItemListTop from './ItemListTop';
import ItemProduct from '../../components/ItemProduct.js/ItemProduct';

const Itemlist = () => {
  const [shoesData, setShoesData] = useState([]);

  useEffect(() => {
    fetch('/data/itemlist.json')
      .then(res => res.json())
      .then(res => setShoesData(res));
  }, []);

  return (
    <div className="itemList">
      <ItemListTop />
      <div className="itemListProducts">
        {shoesData.map(item => (
          <ItemProduct key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};
export default Itemlist;
