import React from 'react'
import styled from 'styled-components'

import { createFragmentContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import { Box, Serif } from '@artsy/palette'

import Gene from './Gene'

const GeneFamily = props => {
  // return <pre>{JSON.stringify(props, null, 2)}</pre>
  const sortedGenes = [...props.geneFamily.genes].sort(
    (a, b) =>
      (a.name || a.displayName).toUpperCase().charCodeAt(0) - (b.name || a.displayName).toUpperCase().charCodeAt(0)
  )
  return (
    <Box id={props.geneFamily.slug}>
      <Serif element="h2" size={10} mt={5} mb={2}>
        {props.geneFamily.name}
      </Serif>
      <Columns>
        {sortedGenes.map(g => (
          <Gene key={g.__id} gene={g} />
        ))}
      </Columns>
    </Box>
  )
}

const Columns = styled.div`
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
