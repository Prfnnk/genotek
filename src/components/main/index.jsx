import React, { useState } from "react";
import "./styles/style.scss";
import Icon from "./img/icon.svg";
import Banner from "./img/present.png";
import Box from "./img/box2.png";
import cn from "classnames";

const MainPage = () => {
  const [activeTabs, setActiveTabs] = useState([]);

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const onClickTabs = (id) => {
    const open = activeTabs.includes(id);

    if (open) {
      const filtered = activeTabs.filter((item) => item !== id);
      setActiveTabs(filtered);
    } else {
      setActiveTabs([...activeTabs, id]);
    }
  };

  return (
    <div className="main">
      <div className="main-block">
        <div className="main__header">
          <div className="main__header-item">GENOTEK</div>
          <div className="main__header-item">неделю назад</div>
          <div className="main__header-item_access">
            <img src={Icon} alt="icon" />
            <div className="mobile">доступно только мне</div>
          </div>
        </div>
        <div className="main__info">
          <div className="main__info-title">
            Подарочный набор для сдачи ДНК-теста доставлен
          </div>
          <div className="main__info-description">
            Спасибо, что выбрали Genotek! На упаковке <br /> вы найдете
            подробную инструкцию как сдать ДНК-тест.
          </div>
        </div>
      </div>
      <div className="main__banner">
        <img src={Banner} alt="banner" />
      </div>
      <div className="main__accordion">
        <div className="main__accordion-item" onClick={() => onClickTabs(1)}>
          <div className="main__accordion-text">
            Как подарить набор другу, чтобы он создал свой личный кабинет?
          </div>
          <div
            className={cn("main__accordion-arrow", {
              "main__accordion-arrow_active": activeTabs.includes(1),
            })}
          ></div>
        </div>
        {activeTabs.includes(1) ? (
          <div className="main__accordion-open">
            <div className="main__accordion-description">
              Все просто! На подарочной упаковке ДНК-теста указан временный
              логин и пароль, который защищен стираемой полосой. <br /> <br />{" "}
              Человеку, который получил ДНК-тест в подарок, нужно ввести
              временный логин и пароль на странице входа в личный кабинет{" "}
              <a className="link" href="/">
                lk.genotek.ru
              </a>
              . После этого ему будет предложено зарегистрироваться или указать
              данные уже зарегистрированного пользователя, ввести номер пробирки
              и вызвать курьера для доставки биоматериала в лабораторию. <br />{" "}
              <br /> Обратите внимание, что по умолчанию вы не получите доступ к
              результатам ДНК-теста того, кому вы подарили тест. Но вы можете
              попросить вашего близкого поделиться с вами результатами в его
              настройках профиля.
            </div>
            <div className="main__accordion-pic">
              <img src={Box} alt="" />
            </div>
          </div>
        ) : null}

        <div className="main__accordion-item" onClick={() => onClickTabs(2)}>
          <div className="main__accordion-text">
            Хочу активировать ДНК-тест в этом личном кабинете
          </div>
          <div
            className={cn("main__accordion-arrow", {
              "main__accordion-arrow_active": activeTabs.includes(2),
            })}
          ></div>
        </div>
        {activeTabs.includes(2) ? (
          <div className="main__accordion-open">
            <div className="main__accordion-description">
              На подарочной упаковке ДНК-теста указан временный логин и пароль,
              который защищен стираемой полосой. Пожалуйста, введите их ниже.
              После ввода временных данных, вы сможете ввести номер пробирки и
              вызвать курьера для доставки биоматериала в лабораторию.
            </div>
            <div className="main__accordion-pic">
              <img src={Box} alt="" />
            </div>
            <div className="main__accordion-block">
              <div className="main__accordion-login">
                <div className="main__accordion-input">
                  <input
                    type="text"
                    placeholder="Логин"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                  />
                  {login !== "" ? (
                    <button
                      className="clear"
                      onClick={() => setLogin("")}
                    ></button>
                  ) : null}
                </div>
                <div className="main__accordion-input">
                  <input
                    type="text"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {password !== "" ? (
                    <button
                      className="clear"
                      onClick={() => setPassword("")}
                    ></button>
                  ) : null}
                </div>
              </div>
              <button className="main__accordion-button">
                Активировать ДНК-тест
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default MainPage;
