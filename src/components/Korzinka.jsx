import Logo from "../img/logo.svg";

const Home = () => {
  //   const items = JSON.parse(localStorage.getItem("basket")).map(item)
  //   const buyurtma = () => {
  //     console.log(`Buyurtma berildi :
  //     ${titles},
  //     ${umumiy_son},
  //     ${umumiy_narx},
  //     ${foydalanuvchi}

  // `);
  //   };
  const button = <button className="korzinka-button">buyurtma berish</button>;
  return (
    <div>
      <div className="Navbar">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        {10 > 1 ? button : null}
      </div>
      <div className="pizzas"></div>
    </div>
  );
};

export default Home;
