import React from "react";
import Logo from "../../assets/imgs/repeat.png";
import useLang from "./../../Hook/useLang";
import "./Header.scss";

import Localization from "../../Localization/Localization";

function Header() {
  const [lang, setLang] = useLang();

  const onChangeLang = (evt) => {
    setLang(evt.currentTarget.value);
  };

  return (
    <div className="container">
      <header className="header">
        <div className="header__logo">
          <img src={Logo} width={20} height={20} alt="logo" /> Soft point
        </div>
        <ul className="header__list">
          <li className="header__item">
            <a className="header__link" href="">
              {Localization[lang].header.titleHead1}
            </a>
          </li>
          <li className="header__item">
            <a className="header__link" href="">
              {Localization[lang].header.titleHead2}
            </a>
          </li>
          <li className="header__item">
            <a className="header__link" href="">
              {Localization[lang].header.titleHead3}
            </a>
          </li>
        </ul>
        <button className="header__btn">
          {Localization[lang].header.titleHead4}
        </button>
        <div className="box">
          <select
            className="select"
            defaultValue={lang}
            onChange={(evt) => onChangeLang(evt)}
          >
            <option className="option" value="uz">
              UZB
            </option>
            <option className="option" value="en">
              EN
            </option>
            <option className="option" value="ru">
              РУС
            </option>
          </select>
        </div>
      </header>
    </div> // end of container
  );
}

export default Header;
