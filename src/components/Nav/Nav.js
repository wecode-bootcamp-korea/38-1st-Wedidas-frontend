import React, { useState, useEffect } from 'react';
import './Nav.scss';
import '../../styles/reset.scss';
import '../../styles/common.scss';
import { SlMagnifier } from 'react-icons/sl';
import { BiUser, BiHeart } from 'react-icons/bi';
import { RiShoppingBagLine } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';

const Nav = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [layout, setLayout] = useState([]);
  const [underLayout, setUnderLayout] = useState([]);
  const [wlayout, setWLayout] = useState([]);
  const [wunderLayout, setWunderLayout] = useState([]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const onSearch = event => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  useEffect(() => {
    fetch('/data/Navmockdata/mockdatamenmenu.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setLayout(data);
      });
  }, []);

  useEffect(() => {
    fetch('/data/Navmockdata/mockdatamenmenu2.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setUnderLayout(data);
      });
  }, []);

  useEffect(() => {
    fetch('/data/Navmockdata/mockdatawomenmenu.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setWLayout(data);
      });
  }, []);

  useEffect(() => {
    fetch('/data/Navmockdata/mockdatawomenmenu2.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setWunderLayout(data);
      });
  }, []);

  const [menShown, setMenShown] = useState(false);
  const [womenShown, setWomenShown] = useState(false);

  return (
    <>
      <nav className="nav">
        <div className="navBox">
          <div className="upperNavBox">
            <button className="leftNotice" onClick={openModal}>
              가입/로그인/배송지 입력 안내
            </button>
            <button className="middleNotice">
              회원가입 10% 쿠폰 및 생일 쿠폰 지급 관련 기준 안내
            </button>
            <button className="rightNotice">택배 서비스 안내사항</button>
          </div>
          <div className="middleNavBox">
            <div className="assistSection">
              <a href="/help">도움말</a>
              <a href="/refund">반품</a>
              <a href="/orders">주문조회</a>
              <a href="/signup">아디클럽 가입하기</a>
            </div>
          </div>
          <div className="lowerNavBox">
            <button className="leftMenuBar">
              <GiHamburgerMenu />
            </button>
            <div className="logo">Wedidas</div>
            <div className="mainMenu">
              <ul className="mainMenuListing">
                <li className="menuMen" onMouseEnter={() => setMenShown(true)}>
                  MEN
                </li>
                <li
                  className="menuWomen"
                  onMouseEnter={() => setWomenShown(true)}
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
                <a href="/signup">
                  <BiUser className="iconUser" />
                </a>
                <a href="/wishlist">
                  <BiHeart className="iconHeart" />
                </a>
                <a href="/shoppingbag">
                  <RiShoppingBagLine className="iconBag" />
                </a>
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
              {layout.map(mock => (
                <div key={mock.id} className="mock">
                  <a href={mock.shoes.url}>{mock.shoes.name}</a>
                  {mock.shoesCategory.map(el => (
                    <a className={mock.id}>{el}</a>
                  ))}
                </div>
              ))}
            </div>
          )}
          {menShown && (
            <div className="underLayOut">
              {underLayout.map(mock2 => (
                <a key={mock2.id} className={mock2.id} href={mock2.shoes.url}>
                  {mock2.shoes.name}
                </a>
              ))}
            </div>
          )}
        </div>
        <div
          className="womenhoverContainer"
          onMouseLeave={() => setWomenShown(false)}
        >
          {womenShown && (
            <div className="hoverContainer">
              {wlayout.map(mock => (
                <div key={mock.id} className="mock">
                  <a href={mock.shoes.url}>{mock.shoes.name}</a>
                  {mock.shoesCategory.map(el => (
                    <a className={mock.id}>{el}</a>
                  ))}
                </div>
              ))}
            </div>
          )}
          {womenShown && (
            <div className="underLayOut">
              {wunderLayout.map(mock2 => (
                <a key={mock2.id} className={mock2.id} href={mock2.shoes.url}>
                  {mock2.shoes.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Nav;
