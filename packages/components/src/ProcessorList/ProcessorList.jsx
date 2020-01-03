import React from "react";
import PropTypes from "prop-types";
import { Box, Flex, Text } from "rebass";

/** @jsx jsx */
import { jsx } from "theme-ui";
import Processor from "../Processor/Processor.jsx";
import List from "../List/List.jsx";

function ProcessorList({ processors, onChange }) {
  return (
    <List title="Processors">
      {processors.map(p => {
        return (
          <Processor
            onClick={e => onChange(p.ProcID)}
            key={p.ProcID}
            p={p}
          ></Processor>
        );
      })}
    </List>
  );
}

ProcessorList.propTypes = {};

export default ProcessorList;
