import React, { useState, useEffect, useRef } from 'react';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import ItemProduct from '../../../components/ItemProduct/ItemProduct';
import './MainSlide.scss';

const TOTAL_SLIDES = 3;
const MainSlide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sources, setSources] = useState([]);
  const slideRef = useRef(null);

  useEffect(() => {
    fetch('data/MainSlide.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setSources(data);
      });
  }, []);

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      return;
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      return;
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.7s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide * 25}%)`;
  }, [currentSlide]);

  const moveDot = index => {
    setCurrentSlide(index);
  };

  return (
    <div className="mainSlide">
      <h2 className="title">BEST OF WEDIDAS</h2>
      <div className="slideContainer">
        <div className="slideWrap" ref={slideRef}>
          {sources.map(source => (
            <ItemProduct className="slideItem" key={source.id} data={source} />
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        style={{ opacity: currentSlide === 0 ? 0 : 1 }}
        className="prevBtn slideBtn"
      >
        <BsArrowLeft />
      </button>
      <button
        onClick={nextSlide}
        style={{ opacity: currentSlide >= TOTAL_SLIDES ? 0 : 1 }}
        className="nextBtn slideBtn"
      >
        <BsArrowRight />
      </button>
      <div className="paginationWrap">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            onClick={() => moveDot(index)}
            className={`pagination ${currentSlide === index ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MainSlide;
