import React from 'react';
import CartHeader from './CartHeader';
import CartItem from './CartItem';
import './Cart.scss';
import CartAside from './CartAside';

const Cart = () => {
  let totalPrice = 0;
  DATA.map(el => (totalPrice = totalPrice + parseInt(el.price)));

  return (
    <div className="cart">
      <div className="cartLeft">
        <CartHeader length={DATA.length} totalPrice={totalPrice} />
        {DATA.map(data => (
          <CartItem key={data.id} data={data} />
        ))}
      </div>
      <CartAside totalPrice={totalPrice} />
    </div>
  );
};
export default Cart;

const DATA = [
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
  {
    id: 2,
    name: '에어포스',
    price: 119000,
    thumbnail:
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
    description: '착용감 좋은 신발~!',
    categoryname: '남성 Originals',
  },
  {
    id: 3,
    name: '에어포스',
    price: 119000,
    thumbnail:
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
    description: '착용감 좋은 신발~!',
    categoryname: '남성 Originals',
  },
];
