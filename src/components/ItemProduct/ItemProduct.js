import React from 'react';
import './ItemProduct.scss';
import { CiHeart } from 'react-icons/ci';

const ItemProduct = ({ data }) => {
  return (
    <div className="itemProduct">
      <a href="#">
        <div className="itemProductImgBox">
          <span className="heartIcon">
            <CiHeart />
          </span>
          <img className="itemProductImg" src={data.thumbnail} alt="신발사진" />
          <p className="itemPrice">{data.price}</p>
        </div>
        <div className="itemTextBox">
          <p className="itemName">{data.name}</p>
          <p className="itemCategory">{data.categoryname}</p>
        </div>
      </a>
    </div>
  );
};
export default ItemProduct;
