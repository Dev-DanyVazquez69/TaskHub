import React, { ReactElement, ReactNode } from "react";
import Header from "./header/header";
import Footer from "./footer/footer";

const ContainerIndex: React.FC<any> = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default ContainerIndex;
