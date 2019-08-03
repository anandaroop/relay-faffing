import React from 'react'
import { createFragmentContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

import GeneFamily from './GeneFamily'

const GeneFamilies = props => {
  // return <pre>{JSON.stringify(props, null, 2)}</pre>
  return (
    <>
      {props.viewer.geneFamilies.edges.map(({ node }) => {
        const featuredGenes = props.viewer.featuredGenesByFamily.find(
          f => f.familyName === node.name
        ).genes
        return <GeneFamily key={node.__id} geneFamily={node} featuredGenes={featuredGenes}/>
      })}
    </>
  )
}

export default createFragmentContainer(GeneFamilies, {
  viewer: graphql`
    fragment GeneFamilies_viewer on Viewer {
      geneFamilies(first: 20)
        @connection(key: "GeneFamilies_geneFamilies", filters: []) {
        edges {
          node {
            name
            ...GeneFamily_geneFamily
          }
        }
      }

      featuredGenesByFamily: orderedSets(
        key: "browse:gene-category"
        size: 20
      ) {
        familyName: name
        genes: items {
          ... on FeaturedLink {
            id
            title
            href
            image {
              url(version: "large_rectangle")
            }
          }
        }
      }
    }
  `
})
