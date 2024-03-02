import React, { useState } from "react";

const Header = () => {
  const [isPanelVisible, setPanelVisible] = useState(false);

  const handleMenuClick = () => {
    setPanelVisible(!isPanelVisible);
  };
  const handleCloseClick = () => {
    setPanelVisible(false); // 메뉴를 닫음
  };

  return (
    <>
      <header id="header">
        <h1>
          <a href="#">
            SPEADOX <span>by Marmin</span>
          </a>
        </h1>
        <a href="#menu" onClick={handleMenuClick}>
          Menu
        </a>
      </header>

      <nav id="menu" className={isPanelVisible ? "visible" : ""}>
        <a href="#menu" className="close" onClick={handleCloseClick}></a>
        <ul className="links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="generic.html">장비 목록</a>
          </li>
          <li>
            <a href="elements.html">Elements</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
