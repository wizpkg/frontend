import React from 'react'
import PropTypes from 'prop-types'
import { Box, Flex } from 'rebass'

function PipelineView(props) {
    return (
        <Flex p={2}>
            <ProcessorList></ProcessorList>
            <RunList></RunList>
            <RunDetail></RunDetail>
        </Flex>
    )
}

PipelineView.propTypes = {

}

export default PipelineView
