import React from "react";
import headerLogo from "../../assets/rick-and-morty_logo.png";
import headerImage1 from "../../assets/rick_image_header.webp";
import headerImage2 from "../../assets/rick_morty_abrazo.jpg";
import headerStyles from "./header.module.scss";

function Header() {
  return (
    <header>
      <figure className={headerStyles.containerHeader}>
        <img
          className={headerStyles["containerHeader-img_left"]}
          src={headerImage1}
          alt="rick_morty_header"
        />
        <img
          className={headerStyles["containerHeader-img_right"]}
          src={headerImage2}
          alt="rick_morty_abrazo"
        />
        <img
          className={headerStyles["containerHeader-img"]}
          src={headerLogo}
          alt="rick-and-morty-logo"
        />
      </figure>
    </header>
  );
}

export default Header;
