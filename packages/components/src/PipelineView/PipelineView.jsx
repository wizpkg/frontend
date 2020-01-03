import React from "react";
import PropTypes from "prop-types";
import { Box, Flex } from "rebass";

import ProcessorList from "../ProcessorList/ProcessorList.jsx";
import RunDetail from "../RunDetail/RunDetail.jsx";
import RunList from "../RunList/RunList.jsx";

import Store from "../internal/Store.js";

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
        <RunList></RunList>
        <RunDetail></RunDetail>
      </Flex>
  );
}

PipelineView.propTypes = {};

export default PipelineView;
