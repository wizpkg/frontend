import React from "react";
import { Box, Flex, Card, Image, Heading, Text } from "rebass";
import Icon from "../Icon/Icon.jsx";

// title is an alternative for providing a logoSrc if no logo is available
export default ({ logo, title }) => (
  <Flex p={3} alignItems="center">
    <Box flex="0 1 auto" width={0.1}>{title != "" ? logo : title}</Box>
    <Box mx="auto" />
    <Box >
      <Text fontWeight="bold">
        Rebass
      </Text>
      <Text>Hello</Text>
    </Box>
  </Flex>
);
