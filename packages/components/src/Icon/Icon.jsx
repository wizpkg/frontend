import React from "react";
import { ReactSVG } from "react-svg";
/** @jsx jsx */
import { jsx } from 'theme-ui'


export default function Icon({ src, theme }) {
  return <ReactSVG sx={{ fontWeight: "heading" }} src={src}></ReactSVG>;
}
