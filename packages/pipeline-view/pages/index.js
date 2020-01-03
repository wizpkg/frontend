import React from "react";

// import "./index.css"

// import { Head } from "next/head";

import { Box } from "rebass";

import { NavBar, PipelineView, Store } from "components";
import ThemeWrapper from "../components/ThemeWrapper";

import Logo from "../public/logo.svg";

const Home = () => (
  <ThemeWrapper>
    <Store.Container>
      <Box
        sx={{
          minHeight: "100vh"
        }}
      >
        <style jsx global>{`
          @import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");
          html,
          body {
            min-height: 100vh;
            margin: 0;
            font-family: "Poppins", system-ui, sans-serif;
          }
        `}</style>
        <NavBar logo={<Logo width="10rem"></Logo>}></NavBar>
        <PipelineView></PipelineView>
      </Box>
    </Store.Container>
  </ThemeWrapper>
);

export default Home;
