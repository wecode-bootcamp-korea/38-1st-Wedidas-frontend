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
  const [buttonToggle, setButtonToggle] = useState('');
  const { id } = useParams();

  const priceToString = price => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const toggleMenu = () => {
    setReadmore(readmore => !readmore);
  };

  const toggleActive = e => {
    setButtonToggle(prev => {
      return e.target.value;
    });
  };

  const saveSize = event => {
    setProductSize(event.target.value);
  };

  const tokenAuthorization = localStorage.getItem('token');

  useEffect(() => {
    fetch(`http://10.58.52.160:3000/products/detail/${id}`)
      .then(data => data.json())
      .then(data => setProductDetail(data.data));
  }, [id]);

  const sendtoCart = () => {
    fetch('http://10.58.52.114:3000/carts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: tokenAuthorization,
      },
      body: JSON.stringify({
        productId: productDetail[0].id,
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
    fetch('http://10.58.52.78:3000/wishlists', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: tokenAuthorization,
      },
      body: JSON.stringify({
        productId: productDetail[0]?.id,
      }),
    });
  };

  return (
    <div className="detailpage">
      <div className="detailpageDetailSection">
        <div className="imageList">
          <img
            className="productThumbnail"
            src={productDetail[0]?.thumbnailUrl}
            alt="mainimage"
          />
          {readmore &&
            productDetail[0]?.images.map(el => (
              <img
                className="additionalThumbnail"
                key={el}
                src={el}
                alt="additionalimage"
              />
            ))}
          <button
            className={!readmore ? 'showMoreButton' : 'hideMoreButton'}
            onClick={toggleMenu}
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
            <span>???????????????</span>
            <span>
              <IoIosArrowDown />
            </span>
          </button>
          <button>
            <span>??????</span>
            <span>
              <IoIosArrowDown />
            </span>
          </button>
          <button>
            <span>????????????</span>
            <span>
              <IoIosArrowDown />
            </span>
          </button>
          <button>
            <span>????????? ??????</span>
            <span>
              <IoIosArrowDown />
            </span>
          </button>
          <button className="reviewbutton">
            <span>??????</span>
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
              ????????????
            </span>
          </Link>
        </div>
        {LINK_COMPONENT.map(el => (
          <span key={el.id} className="categoryInnerLink">
            <Link to={el.link}>{el.name}</Link>
          </span>
        ))}
      </div>
      <div className="detailpageSelectSection">
        <div className="topMostUpperElement">
          <div className="categoryAndReview">
            <p>{productDetail[0]?.category}</p>
            <p>???????????????</p>
          </div>
          <div className="titlePriceColor">
            <p className="productName">{productDetail[0]?.name}</p>
            <p className="price">
              {priceToString(Math.round(productDetail[0]?.price))} ???
            </p>
            <p className="availableColors"> ??????/ ??????/ ??????</p>
          </div>
        </div>
        <div className="sizeSelector">
          <p className="availableSize"> ?????? ????????? ?????????</p>
          <div className="sizeButtonList">
            {productDetail[0]?.stocksize
              ?.filter(data => data.stock > 0)
              .map(item => (
                <button
                  value={item.id}
                  key={item.footSize}
                  className={
                    'sizeButton' + (item.id == buttonToggle ? 'active' : '')
                  }
                  onClick={e => {
                    saveSize(e);
                    toggleActive(e);
                  }}
                >
                  {item.footSize}
                </button>
              ))}
          </div>
          <div className="sizeGuide">
            <span className="rulerIcon">
              <BiRuler />
              ????????? ?????????
            </span>
          </div>
        </div>
        <div className="rightLowerButtonList">
          <div className="firstButtonRow">
            <button className="btn shoppingBagButton" onClick={sendtoCart}>
              <span>???????????? ??????</span>
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
              ?????? ?????? ?????? ?????? <HiOutlineArrowNarrowRight />
            </button>
          </div>
          <div className="listFAQ">
            <p className="listUpperMargin">
              <Link to="/shippingrefund">
                <TbTruckDelivery />
                ??????/??????
              </Link>
            </p>
            <p className="listUpperMargin">
              <Link to="/laundryinfo">
                <RiErrorWarningLine />
                ?????? ??? ?????? ??? ????????????
              </Link>
            </p>
            <p className="listUpperMargin">
              <Link to="/qc">
                <AiOutlineCheckCircle />
                ?????? ?????? ??? AS ??????
              </Link>
            </p>
            <p className="listUpperMargin">
              <Link to="/productassemblydate">
                <AiOutlineCheck />
                ?????? ???????????? ??????
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
