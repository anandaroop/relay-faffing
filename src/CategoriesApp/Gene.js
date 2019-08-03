import React from 'react'
import { createFragmentContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import { Box, Link, Serif } from '@artsy/palette'

const Gene = props => {
  return (
    <Box my={3}>
      <Link
        href={`/gene/${props.gene.slug}`}
        hoverColor="purple100"
        noUnderline={true}
        underlineBehavior="none"
        mb={1}
      >
        <Serif size={5}>{props.gene.name}</Serif>
      </Link>
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
