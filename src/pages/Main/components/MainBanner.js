import { useState, useEffect, useRef } from 'react';
import { TbPlayerPlay, TbPlayerPause } from 'react-icons/tb';
import { GiSpeakerOff, GiSpeaker } from 'react-icons/gi';
import './MainBanner.scss';

const MainBanner = () => {
  const [isPlayToggle, setIsPlayToggle] = useState(true);
  const [isSoundToggle, setIsSoundToggle] = useState(true);
  const delay = 3000;
  const [currentImage, setCurrentImage] = useState('');

  // FIXME: setInterval을 바로 쓰면서 button클릭시 일시 정지가 안될지 알아본후 지울 예정
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     if (currentImage === 'show') {
  //       setCurrentImage('');
  //     } else if (currentImage === '') {
  //       setCurrentImage('show');
  //     }
  //   }, 3000);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, [currentImage]);

  const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let timer = setInterval(tick, delay);
        return () => clearInterval(timer);
      }
    }, [delay]);
  };

  useInterval(
    () => {
      if (currentImage === 'show') {
        setCurrentImage('');
      } else if (currentImage === '') {
        setCurrentImage('show');
      }
    },
    isPlayToggle ? delay : null
  );

  return (
    <div className="mainBanner">
      <div className="imgBox">
        <img
          className={currentImage}
          src="https://images.unsplash.com/photo-1590771129825-5422e5a76d03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt="사진"
        />
        <img
          src="https://images.unsplash.com/photo-1534211269469-314ffbac5b34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
          alt="사진"
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
        <button onClick={() => setIsPlayToggle(!isPlayToggle)}>
          {isPlayToggle ? <TbPlayerPause /> : <TbPlayerPlay />}
        </button>
        <button onClick={() => setIsSoundToggle(!isSoundToggle)}>
          {isSoundToggle ? <GiSpeaker /> : <GiSpeakerOff />}
        </button>
      </div>
    </div>
  );
};

export default MainBanner;
