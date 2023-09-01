import { useState } from "react";
import Modal from "./Modal";
const pitsa = [
  {
    id: 1,
    xamir: ["qalin", "o'rtacha"],
    price: "65",
    image:
      "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F405e4be1-3493-49d2-ab92-4eb256200ac5.jpg&w=3840&q=100",
    title: "Donar Pitsa",
    type: "meat",
    description:
      "Donar go‘shti va haqiqiy motsarella pishlog‘i solingan mazali va to‘yimli pitsa",
  },
  {
    id: 2,
    xamir: ["ingichka"],
    price: "67",
    image:
      "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F2c814f26-9d3c-4b66-ae54-003fe4db2cb4.jpg&w=3840&q=100",
    title: "Salsa",
    type: "chees",
    description:
      "Joʻja, salsa sousi, mayin motsarella pishlogʻi, xalapenyo, bulgʻor qalampiri va pomidorlar",
  },
  {
    id: 3,
    xamir: ["qalin"],
    price: "70",
    image:
      "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fd020eb98-5c57-43d6-ba90-969907dc8186.jpg&w=3840&q=100",
    title: "Gurme",
    type: "grib",
    description: "Pizza sous, zaytun, pepperoni, qo'ziqorin, oregano",
  },
  {
    id: 4,
    xamir: ["qalin", "o'rtacha"],
    price: "54",
    image:
      "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F45bd4064-2430-4250-899d-d6f834d36c30.jpg&w=3840&q=100",
    title: "Chicken karri",
    type: "spicy",
    description:
      "Mol goʻshtili rulet va tovuq filesi motsarella pishlogʻi, ananas va Karri sousi bilan",
  },
  {
    id: 5,
    xamir: ["qalin", "ingichka"],
    price: "56",
    image:
      "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F94844930-5c66-4c12-a670-93b048169dbe.jpg&w=3840&q=100",
    title: "Super miks",
    type: "mix",
    description:
      "«Super Miks» pitsasi 1 ta pitsada 4 xil sevimli pitsalaringiz birlashmasi 😋 Hammasini va birdan tatib ko‘rishni xush ko‘ruvchilar uchun nihoyatda mos keladi 🙃",
  },
  {
    id: 6,
    xamir: ["ingichka", "o'rtacha"],
    price: "52",
    image:
      "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F23138748-1bff-4994-b42b-cf7044ed4e0d.jpg&w=3840&q=100",
    title: "Dabl pepperoni",
    type: "chees",
    description:
      "Ikki hissa pepperoni motsarella pishlogʻi va tomat sousi bilan",
  },
  {
    id: 7,
    xamir: ["o'rtacha"],
    price: "68",
    image:
      "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F07b2af79-95e0-48ae-8962-3b29fdfcb6d4.jpg&w=3840&q=100",
    title: "Meksikancha",
    type: "meat",
    description:
      "Mol goʻshti, pepperoni kolbasasi, mayin motsarella pishlogʻi, xalapenyo, barbekyu sousi, bulgʻor qalampiri, piyoz va pomidorlar",
  },
];
function Pizza({ type }) {
  const [openModalId, setOpenModalId] = useState(null);
  let filter = pitsa.filter((item) => {
    return item.type === type || item.type === "mix";
  });
  const openModal = (id) => {
    setOpenModalId(id);
  };

  const closeModal = () => {
    setOpenModalId(null);
  };

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
              <div className="card" key={item.id}>
                <div className="image">
                  <img className="pitsaimg" src={item.image} alt="" />
                </div>
                <div className="title">{item.title}</div>
                <div className="description"> {item.description}</div>
                <div className="price-basket">
                  <div className="price-back">
                    <div className="price">
                      {item.price},000 <span className="uzs">UZS</span>
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
        />
      )}
    </>
  );
}
export default Pizza;
