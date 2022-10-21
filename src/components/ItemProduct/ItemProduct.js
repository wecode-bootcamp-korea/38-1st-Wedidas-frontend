import React from 'react';
import { Link } from 'react-router-dom';
import { CiHeart } from 'react-icons/ci';
import './ItemProduct.scss';

const ItemProduct = ({ data }) => {
  return (
    <div className="itemProduct">
      <Link>
        <div className="itemProductImgBox">
          <CiHeart className="heartIcon" />
          <img
            className="itemProductImg"
            src={data.thumbnail_url}
            alt="신발사진"
          />
          <p className="itemPrice">{data.price}원</p>
        </div>
        <div className="itemTextBox">
          <p className="itemName">{data.name}</p>
          <p className="itemCategory">{data.category}</p>
        </div>
      </Link>
    </div>
  );
};
export default ItemProduct;
