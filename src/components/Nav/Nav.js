import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SlMagnifier } from 'react-icons/sl';
import { BiUser, BiHeart } from 'react-icons/bi';
import { RiShoppingBagLine } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';
import './Nav.scss';
import '../../styles/reset.scss';
import '../../styles/common.scss';

const Nav = () => {
  const [search, setSearch] = useState('');
  const [mockDataFetch, setMockDataFetch] = useState([]);

  const onSearch = event => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  useEffect(() => {
    fetch('/data/Navmockdata/navmockdata.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setMockDataFetch(data);
      });
  }, []);

  const [menShown, setMenShown] = useState(false);
  const [womenShown, setWomenShown] = useState(false);

  return (
    <div className="navComponent">
      <nav className="nav">
        <div className="navBox">
          <div className="upperNavBox">
            <button className="leftNotice">가입/로그인/배송지 입력 안내</button>
            <button className="middleNotice">
              회원가입 10% 쿠폰 및 생일 쿠폰 지급 관련 기준 안내
            </button>
            <button className="rightNotice">택배 서비스 안내사항</button>
          </div>
          <div className="middleNavBox">
            <div className="assistSection">
              <Link className="link" to="/help">
                도움말
              </Link>
              <Link className="link" to="/refund">
                반품
              </Link>
              <Link className="link" to="/orders">
                주문조회
              </Link>
              <Link className="link" to="/signup">
                아디클럽 가입하기
              </Link>
            </div>
          </div>
          <div className="lowerNavBox">
            <button className="leftMenuBar">
              <GiHamburgerMenu />
            </button>
            <div className="logo">Wedidas</div>
            <div className="mainMenu">
              <ul className="mainMenuListing">
                <li
                  className="menuMen"
                  onMouseEnter={() => setMenShown(true)}
                  onMouseOver={() => setWomenShown(false)}
                >
                  MEN
                </li>
                <li
                  className="menuWomen"
                  onMouseEnter={() => setWomenShown(true)}
                  onMouseOver={() => setMenShown(false)}
                >
                  WOMEN
                </li>
                <li className="menuSports">SPORTS</li>
                <li className="menuBrands">BRANDS</li>
              </ul>
            </div>
            <div className="sideMenu">
              <div className="searchWrapper">
                <form action="/search">
                  <input
                    className="searchBar"
                    type="text"
                    value={search}
                    placeholder="검색"
                    onChange={onSearch}
                  />
                  <button className="searchSubmit" type="submit">
                    <SlMagnifier />
                  </button>
                </form>
              </div>
              <div className="iconWrapper">
                <Link to="/signup">
                  <BiUser className="iconUser" />
                </Link>
                <Link to="/wishlist">
                  <BiHeart className="iconHeart" />
                </Link>
                <Link to="/shoppingbag">
                  <RiShoppingBagLine className="iconBag" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="hoverWholeBox">
        <div
          className="menHoverContainer"
          onMouseLeave={() => setMenShown(false)}
        >
          {menShown && (
            <div className="hoverContainer">
              {mockDataFetch
                .filter(mockDataFetch => mockDataFetch.gender === '남성')
                .map(data => (
                  <div key={data.id} className="mock">
                    <Link to={data.shoes.url}>{data.shoes.name}</Link>
                    {data.shoesCategory.map(el => (
                      <Link className={data.id}>{el}</Link>
                    ))}
                  </div>
                ))}
            </div>
          )}
          {menShown && (
            <div className="underLayOut">
              {mockDataFetch
                .filter(mockDataFetch =>
                  mockDataFetch.shoes.name.includes('남성')
                )
                .map(data => (
                  <Link key={data.id} className={data.id} to={data.shoes.url}>
                    {data.shoes.name}
                  </Link>
                ))}
            </div>
          )}
        </div>
      </div>
      <div className="hoverWholeBox">
        <div
          className="womenhoverContainer"
          onMouseLeave={() => setWomenShown(false)}
        >
          {womenShown && (
            <div className="hoverContainer">
              {mockDataFetch
                .filter(mockDataFetch => mockDataFetch.gender === '여성')
                .map(data => (
                  <div key={data.id} className="mock">
                    <Link to={data.shoes.url}>{data.shoes.name}</Link>
                    {data.shoesCategory.map(el => (
                      <Link className={data.id}>{el}</Link>
                    ))}
                  </div>
                ))}
            </div>
          )}
          {womenShown && (
            <div className="underLayOut">
              {mockDataFetch
                .filter(mockDataFetch =>
                  mockDataFetch.shoes.name.includes('여성')
                )
                .map(data => (
                  <Link key={data.id} className={data.id} to={data.shoes.url}>
                    {data.shoes.name}
                  </Link>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
