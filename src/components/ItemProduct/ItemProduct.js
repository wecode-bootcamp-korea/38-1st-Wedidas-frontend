import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineHeart, HiHeart } from 'react-icons/hi';
import './ItemProduct.scss';

const ItemProduct = ({ data }) => {
  const [isWish, setIsWish] = useState(false);
  const handleWishClick = () => {
    setIsWish(!isWish);
  };

  return (
    <div className="itemProduct">
      <Link>
        <div className="itemProductImgBox">
          {!isWish ? (
            <HiOutlineHeart className="heartIcon" onClick={handleWishClick} />
          ) : (
            <HiHeart className="heartIcon" onClick={handleWishClick} />
          )}
          <img
            className="itemProductImg"
            src={data.thumbnailUrl}
            alt="신발사진"
          />
          <p className="itemPrice">{data.price}</p>
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
