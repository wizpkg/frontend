import React from "react";
import PropTypes from "prop-types";
import { Box, Flex } from "rebass";

/** @jsx jsx */
import { jsx } from "theme-ui";

function ListItem({ children, ...props }) {
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
      {children}
    </Box>
  );
}

ListItem.propTypes = {};

export default ListItem;
