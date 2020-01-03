import React from "react";
import { Box, Flex, Card, Image, Heading, Text } from "rebass";

export default ({ logo }) => (
  <Flex>
    <Box width={1}>{logo}</Box>
  </Flex>
);
