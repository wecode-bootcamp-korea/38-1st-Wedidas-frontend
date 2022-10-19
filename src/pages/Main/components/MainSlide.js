import React, { useState, useEffect, useRef } from 'react';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import './MainSlide.scss';

const TOTAL_SLIDES = 3;
const MainSlide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sources, setSources] = useState([]);
  const slideRef = useRef(null);
  const listRef = useRef(null);
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
      // setCurrentSlide(0);
      return;
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      // setCurrentSlide(TOTAL_SLIDES);
      return;
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.7s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide * 25}%)`;
  }, [currentSlide, listRef]);

  const moveDot = index => {
    setCurrentSlide(index);
  };

  return (
    <div className="mainSlide">
      <h2 className="title">BEST OF WEDIDAS</h2>
      <div className="slideContainer">
        <div className="slideWrap" ref={slideRef}>
          {sources.map(source => (
            <li ref={listRef} className="slideItem" key={source.id}>
              <img src={source.src} />
            </li>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        style={currentSlide === 0 ? { opacity: 0 } : { opacity: 1 }}
        className="prevBtn slideBtn"
      >
        <BsArrowLeft />
      </button>
      <button
        onClick={nextSlide}
        style={currentSlide >= TOTAL_SLIDES ? { opacity: 0 } : { opacity: 1 }}
        className="nextBtn slideBtn"
      >
        <BsArrowRight />
      </button>
      <div className="paginationWrap">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            onClick={() => moveDot(index)}
            className={
              currentSlide === index ? 'pagination active' : 'pagination'
            }
          />
        ))}
      </div>
    </div>
  );
};

export default MainSlide;
