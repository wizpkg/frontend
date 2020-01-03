import React from "react";
import { ReactSVG } from "react-svg";
/** @jsx jsx */
import { jsx } from 'theme-ui'


export default function Icon({ src, ...props }) {
  return <ReactSVG wrapper="span" {...props} src={src}></ReactSVG>;
}
