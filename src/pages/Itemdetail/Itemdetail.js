import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { BsArrow90DegLeft } from 'react-icons/bs';
import { BiRuler } from 'react-icons/bi';
import { TbHeading, TbTruckDelivery } from 'react-icons/tb';
import { RiErrorWarningLine } from 'react-icons/ri';
import { AiOutlineCheckCircle, AiOutlineCheck } from 'react-icons/ai';
import { HiHome, HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { FaRegHeart } from 'react-icons/fa';
import './Itemdetail.scss';

const Itemdetail = () => {
  const navigate = useNavigate();
  const [productDetail, setProductDetail] = useState([]);
  const [productSize, setProductSize] = useState('');
  const [readmore, setReadmore] = useState(false);
  const [buttonToggle, setButtonToggle] = useState(false);
  const params = useParams();
  const productId = params.id;

  const toggleMenu = () => {
    setReadmore(readmore => !readmore);
  };

  const toggleActive = () => {
    setButtonToggle(!buttonToggle);
    console.log('asd');
  };

  const saveSize = event => {
    setProductSize(event.target.value);
  };

  useEffect(() => {
    console.log('working');
    fetch('/data/itemditto.json')
      .then(data => data.json())
      .then(data => setProductDetail(data.data));
  }, []);

  const tokenAuthorization = localStorage.getItem(
    `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsImlhdCI6MTY2NjMyODA5OCwiZXhwIjoxNjY3MTA1Njk4fQ._Y51MRM-wuYWK6dGz2yuGVpccGFT-9MD6RJFQhssi2o`
  );

  console.log(productDetail);

  // useEffect(() => {
  //   fetch(`http://10.58.52.160:3000/products/${productId}`)
  //     .then(data => data.json())
  //     .then(data => setProductDetail(data));
  // }, [productId]);

  const sendtoCart = () => {
    fetch('http://10.58.52.114:3000/carts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: tokenAuthorization,
      },
      body: JSON.stringify({
        productId: productDetail.id,
        sizeId: productSize,
      }),
    })
      .then(data => data.json())
      .then(data => {
        if (data.MESSAGE === 'SUCCESS') {
          localStorage.setItem('access-token', data.access_token);
          alert('Added to shopping cart!');
        } else if (data.MESSAGE === 'Out of stock') {
          alert('Sorry, this product is out of stock');
        } else if (data.MESSAGE === 'KEY_ERROR') {
          alert('Key-error occured');
        }
      });
  };

  const sendtoWishlist = () => {
    fetch('http://10.58.52.114:3000/wishlists', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: tokenAuthorization,
      },
      body: JSON.stringify({
        productId: productDetail.id,
      }),
    });
  };

  return (
    <div className="detailpage">
      <div className="detailpageDetailSection">
        <div className="imageList">
          <img
            className="productThumbnail"
            src={productDetail.thumbnail}
            alt="mainimage"
          />
          {readmore
            ? productDetail.imageUrl.map(el => (
                <img
                  className="additionalThumbnail"
                  key={el}
                  src={el}
                  alt="additionalimage"
                />
              ))
            : null}
          <button
            className={!readmore ? 'showMoreButton' : 'hideMoreButton'}
            onClick={() => toggleMenu()}
          >
            <span>{!readmore ? 'SHOW MORE' : 'SHOW LESS'}</span>
            {!readmore ? (
              <IoIosArrowDown className="downArrowIcon" />
            ) : (
              <IoIosArrowUp className="downArrowIcon" />
            )}
          </button>
        </div>
        <div className="buttonList">
          <button className="highlightButton">
            <span>하이라이트</span>{' '}
            <span>
              <IoIosArrowDown />
            </span>
          </button>
          <button>
            <span>productDetail.data.description</span>{' '}
            <span>
              <IoIosArrowDown />
            </span>
          </button>
          <button>
            <span>세부정보</span>{' '}
            <span>
              <IoIosArrowDown />
            </span>
          </button>
          <button>
            <span>스타일 방법</span>{' '}
            <span>
              <IoIosArrowDown />
            </span>
          </button>
          <button className="reviewbutton">
            <span>리뷰</span>{' '}
            <span>
              <IoIosArrowDown />
            </span>
          </button>
        </div>
      </div>
      <div className="categoryLink">
        <div onClick={() => navigate(-1)}>
          <Link className="linkWrapper">
            <span className="categoryInnerLink">
              <BsArrow90DegLeft className="arrowSpace" />
              뒤로가기
            </span>
          </Link>
        </div>
        {LINK_COMPONENT.map(el => (
          <span key={el} className="categoryInnerLink">
            <Link to={el.link}>{el.name}</Link>
          </span>
        ))}
      </div>
      <div className="detailpageSelectSection">
        <div className="topMostUpperElement">
          <div className="categoryAndReview">
            <p>{productDetail.category}</p>
            <p>review (임시)</p>
          </div>
          <div className="titlePriceColor">
            <p className="productName">{productDetail.name}</p>
            <p className="price"> {productDetail.price}</p>
            <p className="availableColors"> 블루/ 레드/ 블랙</p>
          </div>
        </div>
        <div className="sizeSelector">
          <p className="availableSize"> 구입 가능한 사이즈</p>
          <div className="sizeButtonList">
            {productDetail.stocksize
              .filter(data => data.stock > 0)
              .map(el => (
                <button
                  key={el.size}
                  className="sizeButton"
                  onClick={e => {
                    saveSize(e);
                    toggleActive();
                  }}
                >
                  {el.size}
                </button>
              ))}
          </div>
          <div className="sizeGuide">
            <span className="rulerIcon">
              <BiRuler />
              사이즈 가이드
            </span>
          </div>
        </div>
        <div className="rightLowerButtonList">
          <div className="firstButtonRow">
            <button className="btn shoppingBagButton" onClick={sendtoCart}>
              <span>장바구니 담기</span>
              <span>
                <HiOutlineArrowNarrowRight />
              </span>
            </button>
            <button className="heartButton" onClick={sendtoWishlist}>
              <FaRegHeart />
            </button>
          </div>
          <div className="sencondButtonRow">
            <button className="recommendButton">
              다른 추천 제품 보기 <HiOutlineArrowNarrowRight />
            </button>
          </div>
          <div className="listFAQ">
            <p className="listUpperMargin">
              <Link>
                <TbTruckDelivery />
                배송/반품
              </Link>
            </p>
            <p className="listUpperMargin">
              <Link>
                <RiErrorWarningLine />
                세탁 및 취급 시 주의사항
              </Link>
            </p>
            <p className="listUpperMargin">
              <Link>
                <AiOutlineCheckCircle />
                품질 보증 및 AS 정보
              </Link>
            </p>
            <p className="listUpperMargin">
              <Link>
                <AiOutlineCheck />
                상품 제조연월 정보
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Itemdetail;

const LINK_COMPONENT = [
  {
    id: 1,
    name: 'Home',
    link: '/',
  },
  {
    id: 2,
    name: 'Originals',
    link: '/originals',
  },
  {
    id: 3,
    name: 'Shoes',
    link: '/shoes',
  },
];
