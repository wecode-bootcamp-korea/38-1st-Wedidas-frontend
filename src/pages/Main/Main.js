import Slide from './components/Slide';
import MainKv from './components/MainKv';
import './Main.scss';
const Main = () => {
  return (
    <div className="main">
      <MainKv />
      <Slide />
    </div>
  );
};
export default Main;
