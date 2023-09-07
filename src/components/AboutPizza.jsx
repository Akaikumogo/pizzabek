import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../context";

export default function AboutPizza() {
  const { pitsa } = useGlobalContext();
  const { id: urlId } = useParams();
  const aboutPitsa = pitsa.filter((item) => item.id == urlId);

  if (aboutPitsa.length === 0) {
    return <div>Pizza not found</div>;
  }

  return (
    <div>
      <div className="aboutCard">
        <img className="modalimg center" src={aboutPitsa[0].image} alt="" />
        <div className="pitsaTexts">
          <h1 className="pitsaPrice">{aboutPitsa[0].title}</h1>
          <p className="pitsadescription">{aboutPitsa[0].description}</p>
          <p className="pitsaPrice">{aboutPitsa[0].price * 1000} UZS</p>
          <Link to="/"> orqaga</Link>
        </div>
      </div>
    </div>
  );
}
