import { useState } from "react";
export default function Footer() {
  const year = new Date().getFullYear();

  const [showIcons, setShowIcons] = useState(false);

  return (
    <div className="footer">
      <h5>Copyright Celine S I Chan {year} </h5>
      <div className="wrapper">
        <button>
          <i class="fa-solid fa-link"></i>
        </button>
      </div>
      <ul>
        <li>
          <i class="fa-brands fa-slack"></i>
        </li>
        <li>
          <i class="fa-brands fa-github"></i>
        </li>
        <li>
          <i class="fa-brands fa-square-steam"></i>
        </li>
      </ul>
    </div>
  );
}
