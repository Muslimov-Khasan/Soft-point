import Img from "../../assets/imgs/1458.png";
import "./Futer.scss";

// Lang
import Localization from "../../Localization/Localization";
import useLang from "./../../Hook/useLang";
function Futer() {
  const [lang] = useLang();

  return (
    <>
      <section>
        <div className="container">
          <div className="futer">
            <div className="futer__left">
              <h3 className="futer__head">
                {Localization[lang].foot.titleFoot1}
              </h3>
              <p className="futer__text">
                {Localization[lang].foot.titleFoot2}
              </p>
              <p className="futer__text">
                {Localization[lang].foot.titleFoot3}
              </p>
              <button className="futer__btn">
                {Localization[lang].foot.titleFoot4}
              </button>
            </div>
            <div className="futer__right">
              <img src={Img} width={750} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Futer;