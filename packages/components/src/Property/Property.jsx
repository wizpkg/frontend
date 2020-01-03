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

Property.propTypes = {};

export default Property;
