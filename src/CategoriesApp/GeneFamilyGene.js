import React from 'react'
import { createFragmentContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import { Box, Serif } from '@artsy/palette'

const GeneFamilyGene = props => {
  return (
    <Box pl={2}>
      <Serif size={3}>{props.gene.name}</Serif>
    </Box>
  )
}

export default createFragmentContainer(GeneFamilyGene, {
  gene: graphql`
    fragment GeneFamilyGene_gene on Gene {
      slug
      name
    }
  `
})
