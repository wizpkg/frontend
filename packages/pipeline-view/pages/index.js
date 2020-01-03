import React from "react";

// import "./index.css"

// import { Head } from "next/head";

import { NavBar, Icon } from "components";
import ThemeWrapper from "../components/ThemeWrapper";

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
      <NavBar logo={<Icon src="/logo.svg"></Icon>}></NavBar>
    </ThemeWrapper>
  </div>
);

export default Home;
