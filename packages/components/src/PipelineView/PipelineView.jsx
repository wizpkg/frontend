import React from "react";
import PropTypes from "prop-types";
import { Box, Flex } from "rebass";

import ProcessorList from "../ProcessorList/ProcessorList";
import RunDetail from "../RunDetail/RunDetail";
import RunList from "../RunList/RunList.tsx";

import Store from "../internal/Store.ts";

//  this imports external css so it breaks everything
// import Splitter from 'm-react-splitters';
// import 'm-react-splitters/lib/splitters.css';

/** @jsx jsx */
import { jsx } from "theme-ui";

function PipelineView(props) {
  let store = Store.useStore();
  return (
    <Flex
      ml={16}
      // sx={{
      //   height: "100%"
      // }}
      flex="1 0 auto"
    >
      {console.log(store)}
      <ProcessorList
        processors={store.get("processors")}
        onChange={store.set("processor")}
        mr={10}
      ></ProcessorList>
      <RunList runs={store.get("runs")} onChange={store.set("run")}></RunList>
      <RunDetail></RunDetail>
    </Flex>
  );
}

PipelineView.propTypes = {};

export default PipelineView;
