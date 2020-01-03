import React from "react";
import PropTypes from "prop-types";
import { Box, Flex, Text } from "rebass";

/** @jsx jsx */
import { jsx } from "theme-ui";

function List({ title, children }) {
  return (
    <Flex
      sx={{
        width: "18rem",
        borderColor: "lightgray"
      }}
      flexDirection={"column"}
    >
      {title != "" ? <Text fontSize={3}>{title}</Text> : null}
      {children}
    </Flex>
  );
}

List.propTypes = {};

export default List;
