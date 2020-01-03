import React from "react";
import PropTypes from "prop-types";
import { Box, Flex } from "rebass";

import ProcessorList from "../ProcessorList/ProcessorList";
import RunDetail from "../RunDetail/RunDetail";
import RunList from "../RunList/RunList";

import Store from "../internal/Store";

/** @jsx jsx */
import { jsx } from "theme-ui";

function PipelineView(props) {
  let store = Store.useStore();
  return (
      <Flex
        ml={16}
        sx={{
          height: "100%"
        }}
      >
        {console.log(store)}
        <ProcessorList processors={store.get("processors")} onChange={store.set("processor")}></ProcessorList>
        <RunList runs={store.get("runs")} onChange={store.set("runs")}></RunList>
        <RunDetail></RunDetail>
      </Flex>
  );
}

PipelineView.propTypes = {};

export default PipelineView;
