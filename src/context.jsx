import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [openModalId, setOpenModalId] = useState(null);
  const [basketTotal, setBasketTotal] = useState(0);
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

  const openModal = (id) => {
    setOpenModalId(id);
  };

  const closeModal = () => {
    setOpenModalId(null);
  };

  const types = {
    all: "Barchasi",
    chees: "Pishloqli",
    meat: "Go'shtli",
    spicy: "Achchiq",
    grib: "Qo'ziqorinli",
  };

  const buyurtma = () => {
    const foydalanuvchi = "Foydalanuvchi nomi"; // Foydalanuvchi nomini o'zgartiring
    console.log(`Buyurtma berildi:
      ${titles},
      ${umumiy_son},
      ${umumiy_narx},
      ${foydalanuvchi}
    `);
  };

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

  const [son, setSon] = useState(1);

  const items = JSON.parse(localStorage.getItem("basket"));
  const titles = items.map((item) => item.title).join(", ");
  const umumiy_son = items.reduce((sum, item) => sum + item.son, 0);
  const umumiy_narx = items.reduce(
    (sum, item) => sum + item.son * item.price * 1000,
    0
  );

  const button = (
    <button className="korzinka-button" onClick={buyurtma}>
      buyurtma berish
    </button>
  );

  const updateBasketTotal = () => {
    const arr = JSON.parse(localStorage.getItem("basket")) || [];
    const totalSum = arr.reduce((sum, item) => sum + item.price * item.son, 0);
    setBasketTotal(totalSum);
  };

  return (
    <AppContext.Provider
      value={{
        son,
        plus,
        minus,
        items,
        titles,
        umumiy_son,
        umumiy_narx,
        buyurtma,
        button,
        openModal,
        closeModal,
        openModalId,
        types,
        updateBasketTotal,
        basketTotal,
        pitsa,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
