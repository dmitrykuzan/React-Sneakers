const Card = () => {
  return (
    <li className="card stack column">
      <div className="favorite">
        <img src="/img/heart-unliked.svg" alt="unliked" />
      </div>
      <img width={133} height={112} src="/img/sneakers/1.jpg" alt="" />
      <p className="card__title">
        Мужские Кроссовки Nike Blazer Mid Suede
      </p>
      <div className="card__info stack align-center justify-space-between">
        <div className="card__info-price stack column">
          <span>Цена:</span>
          <b>12 999 руб.</b>
        </div>
        <img width={32} height={32} src="/img/button-plus.svg" alt="plus" />
      </div>
    </li>
   );
}

export default Card;