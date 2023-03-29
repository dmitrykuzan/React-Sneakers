import React from "react";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Drawer/>
        <Header/>

        <div className="content">
          <div className="content__top stack align-center justify-space-between">
            <h1 className="title">Все кроссовки</h1>
            <div className="search__block stack align-center">
              <img src="/img/search.svg" alt="Search" />
              <input type="search" placeholder="Search..." />
            </div>
          </div>

          <ul className="card__list">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
