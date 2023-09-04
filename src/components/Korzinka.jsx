import Logo from "../img/logo.svg";
import { useState } from "react";
import { useGlobalContext } from "../context.jsx";
const Korzinka = () => {
  const { items, titles, umumiy_son, umumiy_narx, buyurtma, button } =
    useGlobalContext();
  return (
    <div>
      <div className="Navbar">
        <div className="logo">
          <a href="/">
            <img src={Logo} alt="" />
          </a>
        </div>
        {items.length > 0 ? button : "."}
      </div>
      <div className="korzinka-block">
        {items.length > 0 ? (
          <div className="products">
            {items.map((item) => {
              const [currentson, setCurrentson] = useState(item.son);
              const plus = () => {
                if (currentson < 10) {
                  setCurrentson(currentson + 1);
                }
              };

              const minus = () => {
                if (currentson >= 2) {
                  setCurrentson(currentson - 1);
                }
              };
              return (
                <div key={item.id} className="productCard">
                  <div className="productImg">
                    <img className="pizzaimg" src={item.image} alt="" />
                  </div>
                  <div className="productTitle">{item.title}</div>
                  <div className="pricing">
                    <div className="productsonblock">
                      <button className="modalbutton" onClick={minus}>
                        -
                      </button>
                      <p className="modalson">{currentson}-ta</p>
                      <button className="modalbutton" onClick={plus}>
                        +
                      </button>
                    </div>
                    <h1 className="productprice">
                      {currentson * item.price * 1000 + "Uzs"}
                    </h1>
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}
        <div className="buyurtma">
          <div className="buyurtmaberish">Buyurtma qilish</div>
          <p>promokod kiriting va 50.000 UZS bonus oling</p>
          <h3 className="umumiysumma">
            Umumiy summa : <span className=" summa">{umumiy_narx} UZS</span>
          </h3>
          <div>
            <input
              className="promokod"
              type="text"
              placeholder="promokodni kiriting"
            />
          </div>
          <button
            className="buyurtma-berish"
            onClick={() => {
              localStorage.setItem("basket", [].JSON.stringify);
            }}
          >
            Xaridni tasdiqlang
          </button>
        </div>
      </div>
    </div>
  );
};

export default Korzinka;
