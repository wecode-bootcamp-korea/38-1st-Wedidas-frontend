import { useState, useEffect, useRef } from 'react';
import { TbPlayerPlay, TbPlayerPause } from 'react-icons/tb';
import { GiSpeakerOff, GiSpeaker } from 'react-icons/gi';
import './MainKv.scss';

const MainKv = () => {
  const [playToggle, setPlayToggle] = useState(true);
  const [soundToggle, setSoundToggle] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const kvRef = useRef(null);

  useEffect(() => {
    console.log(kvRef.current);
    const timer = setInterval(
      () => setCurrentSlide(prevIndex => (prevIndex !== 1 ? prevIndex + 1 : 0)),
      5000
    );
    return () => {
      clearInterval(timer);
    };
  }, [playToggle]);

  return (
    <div className="mainKv">
      <div className="imgBox" ref={kvRef}>
        <img
          className="first"
          src="https://images.unsplash.com/photo-1590771129825-5422e5a76d03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt="THESE STRIPES ARE FOREVER"
        />
        <img
          src="https://images.unsplash.com/photo-1534211269469-314ffbac5b34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
          alt="THESE STRIPES ARE FOREVER"
        />
      </div>
      <div className="titleBox">
        <h2>
          THESE STRIPES ARE <br />
          FOREVER
        </h2>
        <p>3-스트라이프, 그 영원한 레거시</p>
        <button className="btn">구매하기</button>
      </div>
      <div className="btnBox">
        <button onClick={() => setPlayToggle(!playToggle)}>
          {playToggle ? <TbPlayerPlay /> : <TbPlayerPause />}
        </button>
        <button onClick={() => setSoundToggle(!soundToggle)}>
          {soundToggle ? <GiSpeaker /> : <GiSpeakerOff />}
        </button>
      </div>
    </div>
  );
};

export default MainKv;
