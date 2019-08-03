import React from 'react'
import styled from 'styled-components'

import { createFragmentContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import { Box, Serif } from '@artsy/palette'

import Gene from './Gene'
import FeaturedGene from './FeaturedGene'

const GeneFamily = props => {
  // return <pre>{JSON.stringify(props, null, 2)}</pre>
  const sortedGenes = [...props.geneFamily.genes].sort(
    (a, b) =>
      (a.name || a.displayName).toUpperCase().charCodeAt(0) -
      (b.name || a.displayName).toUpperCase().charCodeAt(0)
  )
  const featuredGenes = props.featuredGenes.slice(0, 3)
  return (
    <Box id={props.geneFamily.slug}>
      <Serif element="h2" size={10} mt={5} mb={2}>
        {props.geneFamily.name}
      </Serif>
      <Columns mt={4}>
        {featuredGenes.map(g => (
          <FeaturedGene key={g.id} gene={g} />
        ))}
      </Columns>
      <Columns mt={4}>
        {sortedGenes.map(g => (
          <Gene key={g.__id} gene={g} />
        ))}
      </Columns>
    </Box>
  )
}

const Columns = styled(Box)`
  column-count: 3;
  column-gap: 2em;
`

export default createFragmentContainer(GeneFamily, {
  geneFamily: graphql`
    fragment GeneFamily_geneFamily on GeneFamily {
      slug
      name
      genes {
        name
        ...Gene_gene
      }
    }
  `
})
