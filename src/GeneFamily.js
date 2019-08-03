import React from 'react'
import { createFragmentContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import GeneFamilyGene from './GeneFamilyGene'

const GeneFamily = props => {
  // return <pre>{JSON.stringify(props, null, 2)}</pre>
  return (
    <div>
      <h1>{props.geneFamily.name}</h1>
      <ul>
        {props.geneFamily.genes.map(g => (
          <GeneFamilyGene key={g.__id} gene={g} />
        ))}
      </ul>
    </div>
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
