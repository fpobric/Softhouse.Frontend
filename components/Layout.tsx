import React, { useEffect } from "react";
import Header from "./header/Header";
import Footer from "./Footer";

const Layout = ({ Component }: { Component: React.FC }) => {
  return (
    <>
      <Header />
      <main className="container mb-5">
        <Component />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
