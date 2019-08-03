import React from 'react'
import { createFragmentContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

const GeneFamilyGene = props => {
  return <li>{props.gene.name}</li>
}

export default createFragmentContainer(GeneFamilyGene, {
  gene: graphql`
  fragment GeneFamilyGene_gene on Gene {
    slug
    name
  }
  `
})
