import React from 'react'
import { createFragmentContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import { Box, Sans } from '@artsy/palette'

import GeneFamilyGene from './GeneFamilyGene'

const GeneFamily = props => {
  // return <pre>{JSON.stringify(props, null, 2)}</pre>
  return (
    <Box>
      <Sans size={8} my={2}>{props.geneFamily.name}</Sans>
      <div>
        {props.geneFamily.genes.map(g => (
          <GeneFamilyGene key={g.__id} gene={g} />
        ))}
      </div>
    </Box>
  )
}

export default createFragmentContainer(GeneFamily, {
  geneFamily: graphql`
    fragment GeneFamily_geneFamily on GeneFamily {
      slug
      name
      genes {
        ...GeneFamilyGene_gene
      }
    }
  `
})
