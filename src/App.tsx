import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  const [isActive, setIsActive] = useState(false);

  const buttonClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={isActive ? "container active" : "container"}>
      <div className="block">
        <section className="block-item block__item">
          <h2 className="block-item__title">У вас уже есть аккаунт?</h2>
          <button onClick={buttonClick} className="block-item__btn signin-btn">
            Вход
          </button>
        </section>

        <section className="block-item block__item">
          <h2 className="block-item__title">У вас нет аккаунта?</h2>
          <button onClick={buttonClick} className="block-item__btn signup-btn">
            Зарегистрироваться
          </button>
        </section>
      </div>
      <div className={isActive ? "form-box active" : "form-box"}>
        <form action="#" className="form form_signin">
          <h3 className="form__title">Вход</h3>
          <p>
            <input type="text" className="form__input" placeholder="Логин" />
          </p>
          <p>
            <input
              type="password"
              className="form__input"
              placeholder="Пароль"
            />
          </p>
          <p>
            <button className="form__btn">Войти</button>
          </p>
          <p>
            <Link to="#" className="form__forgot">
              Восстановить пароль
            </Link>
          </p>
        </form>

        <form action="#" className="form form_signup">
          <h3 className="form__title">Регистрация</h3>
          <p>
            <input type="text" className="form__input" placeholder="Логин" />
          </p>
          <p>
            <input type="email" className="form__input" placeholder="Email" />
          </p>
          <p>
            <input
              type="password"
              className="form__input"
              placeholder="Пароль"
            />
          </p>
          <p>
            <input
              type="password"
              className="form__input"
              placeholder="Подтвердить пароль"
            />
          </p>
          <p>
            <button className="form__btn form__btn_signup">
              Зарегистрироваться
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default App;
