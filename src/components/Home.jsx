import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import Logo from "../img/logo.svg";
import Pizza from "./Pizza";

const Home = () => {
  const [basketTotal, setBasketTotal] = useState(0);

  useEffect(() => {
    const arr = JSON.parse(localStorage.getItem("basket")) || [];
    const totalSum = arr.reduce((sum, item) => sum + item.price * item.son, 0);
    setBasketTotal(totalSum);
  }, []);
  console.log(basketTotal);
  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  let query = useQuery();
  const types = {
    all: "Barchasi",
    chees: "Pishloqli",
    meat: "Go'shtli",
    spicy: "Achchiq",
    grib: "Qo'ziqorinli",
  };

  const updateBasketTotal = () => {
    const arr = JSON.parse(localStorage.getItem("basket")) || [];
    const totalSum = arr.reduce((sum, item) => sum + item.price * item.son, 0);
    setBasketTotal(totalSum);
  };

  return (
    <div>
      <div className="Navbar">
        <div className="logo">
          <a href="/">
            <img src={Logo} alt="" />
          </a>
        </div>
        <input className="search" type="text" placeholder="Pitsani qidirish" />
        <Link to="/korzinka" className="korzinka-button">
          {basketTotal ? basketTotal * 1000 + " | " : " "}savat
        </Link>
      </div>
      <div className="pizzas">
        <div className="pizza-nav">
          <NavLink to="/home?type=all">Barchasi</NavLink>
          <NavLink to="/home?type=meat">Go'shtli</NavLink>
          <NavLink to="/home?type=chees">Pishloqli</NavLink>
          <NavLink to="/home?type=grib">Qo'ziqorinli</NavLink>
          <NavLink to="/home?type=spicy">Achchiq</NavLink>
        </div>
        <h1 className="type">
          {query.get("type") ? types[query.get("type")] : types.all}
        </h1>
        <div className="pitsas">
          <Pizza
            type={query.get("type")}
            updateBasketTotal={updateBasketTotal}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
