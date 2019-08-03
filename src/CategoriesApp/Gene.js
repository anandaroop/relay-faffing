import React from 'react'
import { createFragmentContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import { Box, Serif } from '@artsy/palette'

const Gene = props => {
  return (
    <Box pl={2}>
      <Serif size={3}>{props.gene.name}</Serif>
    </Box>
  )
}

export default createFragmentContainer(Gene, {
  gene: graphql`
    fragment Gene_gene on Gene {
      slug
      name
    }
  `
})
