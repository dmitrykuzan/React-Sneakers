import React from "react";
import { ReactComponent as Cart } from "./img/svg/cart.svg";
import { ReactComponent as Favorite } from "./img/svg/favorite.svg";
import { ReactComponent as User } from "./img/svg/user.svg";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <header className="header stack align-center justify-space-between">
          <div className="header__logo">
            <img width={245} height={40} src="/img/logo.png" alt="" />
          </div>
          <ul className="header__list stack align-center">
            <li className="header__item header__item--cart stack align-center">
              <Cart />
              <span>1205 UAH</span>
            </li>
            <li className="header__item stack align-center">
              <Favorite />
            </li>
            <li className="header__item stack align-center">
              <User />
            </li>
          </ul>
        </header>
        <div className="content">
          <h1 className="title">Все кроссовки</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
