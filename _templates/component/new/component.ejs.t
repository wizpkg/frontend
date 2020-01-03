---
to: packages/components/src/<%= h.changeCase.pascalCase(name) %>/<%= h.changeCase.pascalCase(name) %>.jsx
---
import React from 'react'
import PropTypes from 'prop-types'
import { Box, Flex } from 'theme-ui'

/** @jsx jsx */
import { jsx } from 'theme-ui'

function <%= h.changeCase.pascalCase(name) %>(props) {
    return (
        <Flex p={2}>

        </Flex>
    )
}

<%= h.changeCase.pascalCase(name) %>.propTypes = {

}

export default <%= h.changeCase.pascalCase(name) %>

