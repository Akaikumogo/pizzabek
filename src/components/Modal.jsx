const son = 1;
const Modal = ({ onClose, image, title, price, description }) => {
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
          <h2>{title}</h2>
          <p>{description}</p>

          <p>{son * price},000 Uzs</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
