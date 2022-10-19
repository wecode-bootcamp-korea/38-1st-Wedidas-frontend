import { useState, useEffect, useRef } from 'react';
import { TbPlayerPlay, TbPlayerPause } from 'react-icons/tb';
import { GiSpeakerOff, GiSpeaker } from 'react-icons/gi';
import './MainKv.scss';

const MainKv = () => {
  const [playToggle, setPlayToggle] = useState(true);
  const [soundToggle, setSoundToggle] = useState(true);

  const kvRef = useRef(null);
  const kvRef2 = useRef(null);
  function play() {
    const timer = setInterval(() => {
      console.log(kvRef.current.className);
    }, 5000);
  }
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     console.log(kvRef.current.className);
  //   }, 5000);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, [playToggle]);

  const handleClickPlay = () => {
    setPlayToggle(!playToggle);
    if (playToggle === true) {
      play();
    } else {
      console.log('멈춰');
      clearInterval(play);
    }
  };

  return (
    <div className="mainKv">
      <div className="imgBox">
        <img
          className="first"
          ref={kvRef}
          src="https://images.unsplash.com/photo-1590771129825-5422e5a76d03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt="THESE STRIPES ARE FOREVER"
        />
        <img
          ref={kvRef2}
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
        <button onClick={handleClickPlay}>
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
