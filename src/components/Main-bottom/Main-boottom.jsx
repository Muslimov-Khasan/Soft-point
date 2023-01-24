import Aside from "../../assets/imgs/Aside.png";
import "./Main-bottom.scss";

// Lang
import Localization from "../../Localization/Localization";
import useLang from "./../../Hook/useLang";

function MainBottom() {
  const [lang] = useLang();
  return (
    <>
      <div className="container">
        <div className="sidebar">
          <div className="sidebar__left">
            <img className="sidebar__img" src={Aside} width={750} alt="" />
          </div>
          <div className="sidebar__right">
            <h2 className="sidebar__head">
              {Localization[lang].mainB.titleMainBo1}
            </h2>
            <p className="sidebar__text">
              {Localization[lang].mainB.titleMainBo2}
            </p>
            <p className="sidebar__text">
              {Localization[lang].mainB.titleMainBo3}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainBottom;