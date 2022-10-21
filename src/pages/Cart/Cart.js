import React from 'react';
import CartHeader from './CartHeader';
import CartItem from './CartItem';
import CartAside from './CartAside';
import './Cart.scss';

const Cart = () => {
  let inititalPrice = 0;
  const sumTotalPrice = DATA.reduce(
    (prev, current) => prev + current.price,
    inititalPrice
  );

  const priceToString = price => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <div className="cart">
      <div className="cartLeft">
        <CartHeader
          length={DATA.length}
          totalPrice={priceToString(sumTotalPrice)}
        />
        {DATA.map(data => (
          <CartItem key={data.id} data={data} priceToString={priceToString} />
        ))}
      </div>
      <CartAside totalPrice={priceToString(sumTotalPrice)} />
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
