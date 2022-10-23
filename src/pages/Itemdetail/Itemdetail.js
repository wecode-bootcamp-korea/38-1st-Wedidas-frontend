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

const Itemdetail = () => {
  const navigate = useNavigate();
  const [productDetail, setProductDetail] = useState([]);
  const [readmore, setReadmore] = useState(false);
  const toggleMenu = () => {
    setReadmore(readmore => !readmore);
  };

  useEffect(() => {
    fetch('/data/itemdetaillist.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProductDetail(data);
      });
  }, []);

  return productDetail.map(item => (
    <div key={item.id} className="detailpage">
      <div className="detailpageDetailSection">
        <div className="imageList">
          <img
            className="productThumbnail"
            src={item.mainimage}
            alt="mainimage"
          />
          {readmore
            ? item.thumbnail.map(el => (
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
        <span className="categoryInnerLink">
          <Link to="/">Home</Link>
        </span>
        <span className="categoryInnerLink">
          <Link to="/originals">Originals</Link>
        </span>
        <span className="categoryInnerLink">
          <Link to="/shoes">Shoes</Link>
        </span>
      </div>
      <div className="detailpageSelectSection">
        <div className="topMostUpperElement">
          <div className="categoryAndReview">
            <p>{item.categoryname}</p>
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
          {productDetail
            .filter((item, index) => item.sizes > 0)
            .map(item => (
              <button key={item} class="sizeButton">
                {item.sizes}
              </button>
            ))}
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
  ));
};

export default Itemdetail;
