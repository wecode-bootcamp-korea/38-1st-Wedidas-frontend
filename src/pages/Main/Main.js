import MainSlide from './components/MainSlide';
import MainKv from './components/MainKv';
import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <MainKv />
      <MainSlide />
    </div>
  );
};
export default Main;
