import React from "react";
import PropTypes from "prop-types";
import { Box, Flex, Text } from "rebass";

/** @jsx jsx */
import { jsx } from "theme-ui";
import Processor from "../Processor/Processor.jsx";

function ProcessorList({ processors, onChange }) {
  return (
    <Flex
      sx={{
        width: "18rem",
        borderColor: "lightgray"
      }}
      flexDirection={"column"}
    >
      <Text fontSize={3}>Processors</Text>
      {processors.map(p => {
        return <Processor onClick={e => onChange(p.ProcID)} key={p.ProcID} p={p}></Processor>;
      })}
    </Flex>
  );
}

ProcessorList.propTypes = {};

export default ProcessorList;
