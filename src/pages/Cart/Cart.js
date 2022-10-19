import React, { useState } from 'react';
import CartHeader from './CartHeader';
import CartItem from './CartItem';
import './Cart.scss';
import CartAside from './CartAside';

const Cart = () => {
  const [isSelect, setIsSelect] = useState(false);

  const handleSelect = e => {
    const clicked = e.target.closest('.selectList');
    if (clicked === null && isSelect) {
      setIsSelect(false);
    }
  };
  return (
    <div className="cart" onClick={handleSelect}>
      <div className="cartLeft">
        <CartHeader />
        <CartItem
          data={CART_DATA[0]}
          isSelect={isSelect}
          setIsSelect={setIsSelect}
        />
      </div>
      <CartAside />
    </div>
  );
};
export default Cart;

const CART_DATA = [
  {
    id: 0,
    name: '에어포스',
    price: 119000,
    thumbnail:
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
    description: '착용감 좋은 신발~!',
    categoryname: '남성 Originals',
  },
  {
    id: 1,
    name: '에어포스',
    price: 119000,
    thumbnail:
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
    description: '착용감 좋은 신발~!',
    categoryname: '남성 Originals',
  },
];
