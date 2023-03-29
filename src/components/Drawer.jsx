const Drawer = () => {
  return (
    <div style={{display: 'none'}} className="overlay">
      <div className="drawer stack column">
        <h2 className="drawer__title">Корзина</h2>

        <ul className="drawer__list stack column">
          <li className="drawer__item stack align-center justify-space-between">
            <img width={70} height={70} src="/img/sneakers/2.jpg" alt="" />
            <div className="drawer__item-info stack column">
              <h3 className="drawer__item-title">
                Мужские Кроссовки Nike Air Max 270
              </h3>
              <span className="drawer__item-price">12 999 руб.</span>
            </div>
            <img
              width={32}
              height={32}
              src="/img/btn-delete.svg"
              alt="delete"
            />
          </li>
          <li className="drawer__item stack align-center justify-space-between">
            <img width={70} height={70} src="/img/sneakers/4.jpg" alt="" />
            <div className="drawer__item-info stack column">
              <h3 className="drawer__item-title">
                Мужские Кроссовки Nike Air Max 270
              </h3>
              <span className="drawer__item-price">8 499 руб.</span>
            </div>
            <img
              width={32}
              height={32}
              src="/img/btn-delete.svg"
              alt="delete"
            />
          </li>
        </ul>

        <div className="drawer__total stack column">
          <ul className="drawer__total-list stack column">
            <li className="drawer__total-item stack">
              <p>Итого: </p>
              <div className="drawer__total-dots"></div>
              <span>21 498 руб.</span>
            </li>
            <li className="drawer__total-item stack">
              <p>Налог 5%: </p>
              <div className="drawer__total-dots"></div>
              <span>1074 руб. </span>
            </li>
          </ul>
          <button className="drawer__total-btn">Оформить заказ</button>
        </div>
      </div>
    </div>
   );
}

export default Drawer;