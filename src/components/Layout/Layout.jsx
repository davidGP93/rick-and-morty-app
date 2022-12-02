import React from "react";
import Header from "../Header/Header";
import layoutStyles from './layout.module.scss'

function Layout({children}) {
  return (
    <>
      <Header />
      <div className={layoutStyles.generalLayout}>{children}</div>
    </>
  );
}

export default Layout;
