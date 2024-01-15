import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { ReactElement } from "react";

interface Props {
  children: ReactElement;
}

const layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default layout;
