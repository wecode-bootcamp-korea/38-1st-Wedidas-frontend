import React from 'react';
import ItemProduct from '../../../components/ItemProduct/ItemProduct';
import './WishlistItem.scss';

const WishlistItem = ({ data }) => {
  return (
    <div className="wishListItem">
      {data.map(item => (
        <ItemProduct className="wishItem" key={item.id} data={item} />
      ))}
    </div>
  );
};

export default WishlistItem;
