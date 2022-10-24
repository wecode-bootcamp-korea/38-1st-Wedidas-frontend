import React from 'react';
import { Link } from 'react-router-dom';
import { CiHeart } from 'react-icons/ci';
import './ItemProduct.scss';

const ItemProduct = ({ data }) => {
  const priceToString = price => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  return (
    <div className="itemProduct">
      <Link>
        <div className="itemProductImgBox">
          <CiHeart className="heartIcon" />
          <img className="itemProductImg" src={data.thumbnail} alt="신발사진" />
          <p className="itemPrice">{priceToString(data.price)}</p>
        </div>
        <div className="itemTextBox">
          <p className="itemName">{data.name}</p>
          <p className="itemCategory">{data.categoryname}</p>
        </div>
      </Link>
    </div>
  );
};
export default ItemProduct;
