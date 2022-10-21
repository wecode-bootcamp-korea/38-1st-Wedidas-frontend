import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { BsArrow90DegLeft } from 'react-icons/bs';
import { BiRuler } from 'react-icons/bi';
import { TbTruckDelivery } from 'react-icons/tb';
import { RiErrorWarningLine } from 'react-icons/ri';
import { AiOutlineCheckCircle, AiOutlineCheck } from 'react-icons/ai';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { FaRegHeart } from 'react-icons/fa';
import './Itemdetail.scss';
import '../../styles/reset.scss';
import '../../styles/common.scss';

const Itemdetail = () => {
  let navigate = useNavigate();
  let [shoeFetch, setShoeFetch] = useState([]);
  let [readmore, setReadmore] = useState(false);

  useEffect(() => {
    fetch('/data/itemlist.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setShoeFetch(data);
      });
  }, []);

  const toggleMenu = () => {
    setReadmore(readmore => !readmore);
  };

  return shoeFetch.map(item => (
    <div key={item.id} className="detailpage">
      <div className="detailpageDetailSection">
        <div className="imageList">
          <img className="productThumbnail" src={item.thumbnail} />
          {readmore ? (
            <img className="additionalThumbnail" src={item.thumbnail} />
          ) : (
            <div className="hidedisplay" />
          )}
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
            <span>정보</span>{' '}
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
          <button>
            <span>리뷰</span>{' '}
            <span>
              <IoIosArrowDown />
            </span>
          </button>
        </div>
      </div>
      <div className="categoryLink">
        <div className="backShift" onClick={() => navigate(-1)}>
          <span>
            <BsArrow90DegLeft />
          </span>
          <span className="goback">뒤로가기</span>
        </div>
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <Link to="/originals">Originals</Link>
        </span>
        <span>
          <Link to="/shoes">Shoes</Link>
        </span>
      </div>
      <div className="detailpageSelectSection">
        <div className="topMostUpperElement">
          <div className="categoryAndReview">
            <p>Sportswear(임시)</p>
            <p>review (임시)</p>
          </div>
          <div className="titlePriceColor">
            <p className="productName">{item.name}</p>
            <p className="price"> {item.price}</p>
            <p className="availableColors"> 컬러</p>
          </div>
        </div>
        <div className="sizeSelector">
          <p className="availableSize"> 구입 가능한 사이즈</p>
          <button class="sizeButton">220</button>
          <div className="sizeGuide">
            <span className="rulerIcon">
              <BiRuler />
              사이즈 가이드
            </span>
          </div>
        </div>
        <div className="rightLowerButtonList">
          <div className="firstButtonRow">
            <button className="shoppingBagButton">
              <span>장바구니 담기</span>{' '}
              <span>
                <HiOutlineArrowNarrowRight />{' '}
              </span>
            </button>
            <button className="heartButton">
              <FaRegHeart />
            </button>
          </div>
          <div className="sencondButtonRow">
            <button className="recommendButton">
              다른 추천 제품 보기 <HiOutlineArrowNarrowRight />
            </button>
          </div>
          <div className="listFAQ">
            <p className="p1">
              <Link>
                <TbTruckDelivery />
                배송/반품
              </Link>
            </p>
            <p className="p1">
              <Link>
                <RiErrorWarningLine />
                세탁 및 취급 시 주의사항
              </Link>
            </p>
            <p className="p1">
              <Link>
                <AiOutlineCheckCircle />
                품질 보증 및 AS 정보
              </Link>
            </p>
            <p className="p1">
              <Link>
                <AiOutlineCheck />
                상품 제조연월 정보
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default Itemdetail;
