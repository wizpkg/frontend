import React from "react";
// import theme from './theme'
import { ThemeProvider } from "emotion-theming";

const theme = {
  breakpoints: ["40em", "52em", "64em"],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {
    blue: "#07c",
    lightgray: "#f6f6ff",
    gray: "#D3D3D3",
    text: "#4A4A4A",
    light: "#4A4A4A"
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    // body: '"Poppins", system-ui, sans-serif',
    // heading: '"Poppins", system-ui, sans-serif',
    monospace: "Menlo, monospace"
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25
  },
  shadows: {
    small: "0 0 4px rgba(0, 0, 0, .125)",
    large: "0 0 24px rgba(0, 0, 0, .125)"
  },
  variants: {},
  text: {},
  buttons: {
    primary: {
      color: "white",
      bg: "primary"
    }
  },
  borderWidths: {
    regular: "1px"
  }
};

// or for use with Theme UI:
// import { ThemeProvider } from 'theme-ui'
export default props => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);
