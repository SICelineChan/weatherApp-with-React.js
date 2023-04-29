import { useState } from "react";
export default function Footer() {
  const year = new Date().getFullYear();

  const [showIcons, setShowIcons] = useState(false);

  return (
    <div className="footer">
      <h5>Copyright Celine S I Chan {year} </h5>
      <div className="bottom-container"></div>
      <div
        className="wrapper"
        style={{ position: "relative" }}
        onClick={() => setShowIcons((prev) => !prev)}
      >
        <button className="btn">
          <i class="fa-solid fa-link"></i>
        </button>
      </div>
      <div className={showIcons ? "show" : "noShow"}>
        <ul className="list">
          <li className="item">
            <i class="fa-brands fa-slack"></i>
          </li>
          <li className="item">
            <i class="fa-brands fa-github"></i>
          </li>
          <li className="item">
            <i class="fa-brands fa-square-steam"></i>
          </li>
        </ul>
      </div>
      <style>
        {`
      .noShow {
        display: none;
      }
      .show {
        position: absolute;
        right: 25%;
        width: 10%;
        height: 20vh;
        background: none;
        align-items: start;
      }
      
    `}
      </style>
    </div>
  );
}
