import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import WishlistItem from './components/WishlistItem';
import './Wishlist.scss';

const Wishlist = () => {
  const [count, setCount] = useState(0);
  const [wishItemList, setWishItemList] = useState([]);
  const itemZero =
    '아직 관심 목록에 저장한 항목이 없습니다. 쇼핑을 시작하고 관심 목록에 좋아하는 제품을 추가하세요.';
  // useEffect(() => {
  //   fetch('/data/itemlist.json', {
  //     method: 'GET',
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       setWishItemList(data);
  //       setCount(wishItemList.length);
  //     });
  // }, [wishItemList]);

  return (
    <div className="wishList">
      <p className="title">나의 관심 목록</p>
      <p className="productCount">총 {count} 주문상품</p>
      {wishItemList.length === 0 ? (
        <p>{itemZero}</p>
      ) : (
        <>
          <WishlistItem data={wishItemList} />
          <div className="signupBanner">
            <p className="signupTitle">관심 목록을 꼭 간직하세요</p>
            <p>
              아디클럽에 가입하고 첫 번째 주문에 대한 15% 할인 바우처를
              받으세요. 로그인 하면 아이템을 저장할 수 있습니다.
            </p>
            {/* <Button btnTitle="등록하기" /> */}
            <p>
              <Link to="/signup">아디클럽회원이 아니신가요?</Link>
            </p>
            <p>
              <Link className="" to="/signin">
                로그인
              </Link>
            </p>
          </div>
        </>
      )}
    </div>
  );
};
export default Wishlist;
