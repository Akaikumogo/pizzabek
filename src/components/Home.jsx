import Logo from "../img/logo.svg";
import Pizza from "./Pizza";
import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
export default function Home() {
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
  return (
    <div>
      
      <div className="Navbar">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <input className="search" type="text" placeholder="Pitsani qidirish" />
        <Link to="/korzinka" className="korzinka-button">
          0 so'm | savat
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
          <Pizza type={query.get("type")} />
        </div>
      </div>
    </div>
  );
}
