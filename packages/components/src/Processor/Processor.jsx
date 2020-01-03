import React from "react";
import PropTypes from "prop-types";
import { Box, Flex, Text } from "rebass";

/** @jsx jsx */
import { jsx } from "theme-ui";
import ListItem from "../ListItem/ListItem";
import Property from "../Property/Property";

function Processor({ p, ...props }) {
  return (
    <ListItem>
      <Text fontSize={2}>{p.Name}</Text>
      <Property name="ID" value={p.ProcID}></Property>
      <Property name="Version" value={p.Version}></Property>
    </ListItem>
  );
}

Processor.propTypes = {};

export default Processor;
