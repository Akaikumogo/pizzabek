import Modal from "./Modal";
import {useGlobalContext} from "../context";

function Pizza({ type }) {
  const { fileter, pitsa, openModal, closeModal, openModalId } =
    useGlobalContext();
  let filter = pitsa.filter((item) => {
    return item.type === type || item.type === "mix";
  });
  return (
    <>
      {type
        ? type === "all"
          ? pitsa.map((item) => {
              return (
                <div
                  className="card"
                  key={item.id}
                  onClick={() => openModal(item.id)}
                >
                  <div className="image">
                    <img className="pitsaimg" src={item.image} alt="" />
                  </div>
                  <div className="title">{item.title}</div>
                  <div className="description"> {item.description}</div>
                  <div className="price-basket">
                    <div className="price-back">
                      <div className="price">
                        {item.price},000 <span className="uzs">UZS</span>
                        <button></button>
                      </div>
                    </div>
                    <div className="basket"></div>
                  </div>
                </div>
              );
            })
          : filter.map((item) => {
              return (
                <div
                  className="card"
                  key={item.id}
                  onClick={() => openModal(item.id)}
                >
                  <div className="image">
                    <img className="pitsaimg" src={item.image} alt="" />
                  </div>
                  <div className="title">{item.title}</div>
                  <div className="description"> {item.description}</div>
                  <div className="price-basket">
                    <div className="price-back">
                      <div className="price">
                        {item.price},000 <span className="uzs">UZS</span>
                        <button></button>
                      </div>
                    </div>
                    <div className="basket"></div>
                  </div>
                </div>
              );
            })
        : pitsa.map((item) => {
            return (
              <div
                className="card"
                key={item.id}
                onClick={() => openModal(item.id)}
              >
                <div className="image">
                  <img className="pitsaimg" src={item.image} alt="" />
                </div>
                <div className="title">{item.title}</div>
                <div className="description"> {item.description}</div>
                <div className="price-basket">
                  <div className="price-back">
                    <div className="price">
                      {item.price},000 <span className="uzs">UZS</span>
                      <button></button>
                    </div>
                  </div>
                  <div className="basket"></div>
                </div>
              </div>
            );
          })}
      {openModalId && (
        <Modal
          onClose={closeModal}
          image={pitsa[openModalId - 1].image}
          title={pitsa[openModalId - 1].title}
          description={pitsa[openModalId - 1].description}
          price={pitsa[openModalId - 1].price}
          id={pitsa[openModalId - 1].id}
        />
      )}
    </>
  );
}
export default Pizza;
