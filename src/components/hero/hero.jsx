import { useState } from "react";
import "./hero.css";
let str1 = "overview";
let active = 1;
export default function Hero(data) {
  const obj = data.obj;
  console.log(obj);
  const [proper, setProper] = useState("planet");
  const [about, setAbout] = useState(1);
  const clickedBtn = (str) => {
    if (str !== proper) {
      setProper(str);
      if (str == "geology") {
        setAbout(about + 1);
        active = 3;
        str1 = "structure";
      } else if (str == "internal") {
        setAbout(about + 1);
        str1 = "geology";
        active = 2;
      } else if (str == "planet") {
        setAbout(about + 1);
        str1 = "overview";
        active = 1;
      }
    }
  };
  return (
    <div className="hero">
      <div className="hero__main">
        <div className="img__section">
          <img src={obj.images[proper]} alt="planet" />
        </div>
        <div className="about__section">
          <div className="texts">
            <h1 className="title">{obj.name}</h1>

            <p className="paragraph">{obj[str1].content}</p>
            <p className="wiki">
              Source :
              <a target="blank" href={obj[str1].source}>
                {" "}
                Wikipedia
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  opacity="0.5"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.75002 0C10.3698 0 10.8998 0.220059 11.3397 0.660095C11.7797 1.10013 11.9998 1.63022 11.9998 2.24998V9.74994C11.9998 10.3697 11.7797 10.8997 11.3396 11.3398C10.8997 11.7799 10.3697 12 9.74994 12H2.24998C1.63025 12 1.10021 11.7799 0.660095 11.3398C0.220059 10.8997 0 10.3696 0 9.74994V2.24998C0 1.63022 0.220059 1.10021 0.660095 0.660095C1.10021 0.220059 1.63025 0 2.24998 0H9.75002ZM9.69524 6.71084C9.89825 6.62224 9.99996 6.46867 9.99996 6.24993H9.99999V2.49998C9.99999 2.36455 9.95051 2.24733 9.85165 2.14843C9.75254 2.04943 9.63531 1.9999 9.49991 1.9999H5.75007C5.53133 1.9999 5.3776 2.10156 5.2891 2.30463C5.20061 2.51825 5.23703 2.70044 5.39853 2.85149L6.52354 3.97647L2.35161 8.14845C2.25264 8.24734 2.20313 8.36459 2.20313 8.49988C2.20313 8.63522 2.25264 8.75264 2.35161 8.85142L3.14847 9.64842C3.24742 9.74731 3.36461 9.79687 3.50012 9.79687C3.63557 9.79687 3.75266 9.74731 3.85174 9.64842L8.02342 5.47649L9.14835 6.60147C9.24218 6.70033 9.3594 6.74989 9.49989 6.74989C9.56228 6.74989 9.62762 6.73686 9.69524 6.71084Z"
                  fill="white"
                />
              </svg>
            </p>
          </div>
          <div className="btns">
            <button
              className={active == 1 ? "btn active" : "btn"}
              onClick={() => {
                clickedBtn("planet");
              }}
            >
              <span>01</span> OVERVIEW
            </button>
            <button
              className={active == 2 ? "btn active" : "btn"}
              onClick={() => {
                clickedBtn("internal");
              }}
            >
              <span>02</span>
              <font>Internal</font> Structure
            </button>
            <button
              className={active == 3 ? "btn active" : "btn"}
              onClick={() => {
                clickedBtn("geology");
              }}
            >
              <span>03</span>Surface <font>Geology</font>
            </button>
          </div>
        </div>
      </div>
      <div className="cards__section">
        <div className="card">
          <h3 className="card__title">ROTATION TIME</h3>
          <span className="card__stat">{obj.rotation}</span>
        </div>
        <div className="card">
          <h3 className="card__title">TEMPERATURE</h3>
          <span className="card__stat">{obj.temperature}</span>
        </div>
        <div className="card">
          <h3 className="card__title">REVALUTION</h3>
          <span className="card__stat">{obj.revolution}</span>
        </div>
        <div className="card">
          <h3 className="card__title">RADIUS</h3>
          <span className="card__stat">{obj.radius}</span>
        </div>
      </div>
    </div>
  );
}
