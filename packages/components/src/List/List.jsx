import React from "react";
import PropTypes from "prop-types";
import { Box, Flex, Text } from "rebass";

/** @jsx jsx */
import { jsx } from "theme-ui";

function List({ title, children, ...props }) {
  return (
    <Flex
      {...props}
      sx={{
        minHeight: "100%",
        width: "18rem"
        // borderColor: "lightgray",
        // borderWidth: "1px",
        // borderStyle: "solid"
      }}
      flexDirection={"column"}
    >
      {title != "" ? <Text fontSize={3} mb={2}>{title}</Text> : null}
      {children}
    </Flex>
  );
}

List.propTypes = {};

export default List;
