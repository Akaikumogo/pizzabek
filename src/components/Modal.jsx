import { useEffect } from "react";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
const Modal = ({ onClose, id, image, title, price, description }) => {
  useEffect(() => {
    basketTotal;
  }, []);
  const savatga = (event) => {
    event.preventDefault();
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
  const { son, plus, minus, basketTotal } = useGlobalContext();
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
              <Link to={`/aboutpizza/${id}`}>About pizza</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
