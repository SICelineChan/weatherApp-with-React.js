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
            <a
              href="https://www.instagram.com/breadaboutit/"
              className="link instagram"
            >
              <i class="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li className="item">
            <a href="https://github.com/SICelineChan" className="link github">
              <i class="fa-brands fa-github"></i>
            </a>
          </li>
          <li className="item">
            <a
              href="https://steamcommunity.com/id/sicCeline/"
              className="link steam"
            >
              <i class="fa-brands fa-steam-symbol"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
