import { useState, useEffect } from "react";

const Modal = ({ onClose, id, image, title, price, description }) => {
  const [son, setSon] = useState(1);
  const [basketTotal, setBasketTotal] = useState(0);

  useEffect(() => {
    const arr = JSON.parse(localStorage.getItem("basket")) || [];
    const totalSum = arr.reduce((sum, item) => sum + item.price * item.son, 0);
    setBasketTotal(totalSum);
  }, []);

  const plus = () => {
    if (son < 10) {
      setSon(son + 1);
    }
  };

  const minus = () => {
    if (son >= 2) {
      setSon(son - 1);
    }
  };

  const savatga = () => {
    const old = JSON.parse(localStorage.getItem("basket")) || [];
    const newItem = { id, image, title, price, son };
    localStorage.setItem("basket", JSON.stringify([...old, newItem]));
    const updatedBasket = [...old, newItem];
    const updatedTotal = updatedBasket.reduce(
      (sum, item) => sum + item.price * item.son,
      0
    );
    setBasketTotal(updatedTotal);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modaltop">
          <button className="modalButton" onClick={onClose}>
            orqaga
          </button>
        </div>
        <div className="modalmain">
          <img className="modalimg" src={image} alt={title} />
          <div className="mright">
            <h2 className="modaltitle">{title}</h2>
            <p className="modaldescp">{description}</p>
            <h3>Buyurtma soni</h3>
            <div className="sonblock">
              <button className="modalbutton" onClick={minus}>
                -
              </button>
              <p className="modalson">{son}-ta</p>
              <button className="modalbutton" onClick={plus}>
                +
              </button>
            </div>
            <div className="modalbottom">
              <p className="modalnarx">{son * price},000 UZS</p>
              <button className="savatga" onClick={savatga}>
                Savatga qo'shish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
