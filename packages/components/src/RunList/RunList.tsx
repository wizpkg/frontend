import React from "react";
import PropTypes from "prop-types";
import { Box, Flex, Text } from "rebass";

/** @jsx jsx */
import { jsx } from "theme-ui";

import List from "../List/List";
import ListItem from "../ListItem/ListItem";
import Property from "../Property/Property";

import { Runs } from "../api/Runs";

function RunList({ runs, onChange }: { runs: Runs; onChange: Function }) {
  return (
    <List title="Runs">
      {runs.map(r => {
        return (
          <ListItem onClick={e => onChange(r.RunID)} key={r.RunID}>
            {/* <Text fontSize={2}>{r.RunID}</Text> */}
            <Property name="ID" value={r.RunID}></Property>
            <Property name="State" value={r.CurrentState}></Property>
          </ListItem>
        );
      })}
    </List>
  );
}

RunList.propTypes = {};

export default RunList;
