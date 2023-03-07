import React from "react";
import { About } from "../about/About";
import Footer from "../Footer/Footer";
import Home from "../home/Home";
import { Navbar } from "../navbar/Navbar";
import ParallaxComponent from "../parallax/Parallax";
import { Projects } from "../projects/Projects";
import Technologies from "../technologies/Technologies";

export  const  Main = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Technologies />
      <Projects />
      <About />
      <ParallaxComponent />
      <Footer />
    </>
  );
};
