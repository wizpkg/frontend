import React from "react";
import PropTypes from "prop-types";
import { Box, Flex, Text } from "rebass";

/** @jsx jsx */
import { jsx } from "theme-ui";

const Property = ({ name, value }) => {
  return (
    <Flex>
      <Text fontSize={1} color="light" mr={2}>
        {name}:
      </Text>
      <Text fontSize={1}>{value}</Text>
    </Flex>
  );
};

function Processor({ p, ...props }) {
  return (
    <Box
      {...props}
      p={2}
      my={1}
      sx={{
        boxShadow: "small", //"0 0 1px 3px rgba(0, 0, 0, .125)",
        width: "100%",
        ":hover": {
          backgroundColor: "lightgray"
        }
      }}
    >
      <Text fontSize={2}>{p.Name}</Text>
      <Property name="ID" value={p.ProcID}></Property>
      <Property name="Version" value={p.Version}></Property>
    </Box>
  );
}

Processor.propTypes = {};

export default Processor;
