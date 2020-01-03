import React from "react";

// import "./index.css"

// import { Head } from "next/head";

import { NavBar, PipelineView } from "components";
import ThemeWrapper from "../components/ThemeWrapper";

import Logo from "../public/logo.svg"

const Home = () => (
  <div>
    <style jsx global>{`
      @import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");
      html,
      body {
        min-height: 100vh;
        margin: 0;
        font-family: "Poppins", system-ui, sans-serif;
      }
    `}</style>
    <ThemeWrapper>
      <NavBar logo={<Logo></Logo>}></NavBar>
    </ThemeWrapper>
  </div>
);

export default Home;
