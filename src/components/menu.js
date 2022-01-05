import Start from "../containers/Start";
import Home from "../containers/Home";
import Favourite from "../containers/Favourite";
import { useDispatch, useSelector } from "react-redux";
import { containerHandler } from "../features/container/containerSlice";

export const showContainer = (state) => {
  const findActiveContainer = state.map(container => {
    if (container.value) {
      switch (container.name) {
        case 'Start':
          return <Start />;
        case 'Home':
          return <Home />;
        case 'Favourite':
          return <Favourite />;
        default:
          return undefined;
      }
    }
  });
  const createNewState = findActiveContainer.filter(item => item !== undefined)
  return createNewState[0];
}

export default function Menu(props) {
  const dispatch = useDispatch();

  return (
    <nav className="navigation">
      <form className="navigation__form">
        <h2 className="navigation__logo">Instagram</h2>
        <input className="navigation__text" type="text" placeholder="🔎︎ Search..."></input>
      </form>
      <ul className="navigation__list">
        <li className="navigation__item" onClick={() => dispatch(containerHandler({name:"Home"}))}><img src="https://cdn.pixabay.com/photo/2013/07/12/12/56/home-146585_960_720.png" alt="Home"></img></li>
        <li className="navigation__item" onClick={() => dispatch(containerHandler({name:"Favourite"}))}><img src="https://cdn.pixabay.com/photo/2013/07/12/16/56/compass-151536_960_720.png" alt="Explore"></img></li>
        <li className="navigation__item"><img src="https://cdn.pixabay.com/photo/2017/01/03/09/34/heart-1948970_960_720.png" alt="Favourite"></img></li>
        <li className="navigation__item"><img src="https://cdn.pixabay.com/photo/2016/08/31/11/54/user-1633249_960_720.png" alt="Profile"></img></li>
      </ul>
    </nav>
  )
}