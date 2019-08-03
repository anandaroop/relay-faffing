import React from 'react'
import { createFragmentContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

import GeneFamily from './GeneFamily'

const GeneFamilies = props => {
  // return <pre>{JSON.stringify(props, null, 2)}</pre>
  return (
    <>
      {props.viewer.geneFamilies.edges.map(({ node }) => (
        <GeneFamily key={node.__id} geneFamily={node} />
      ))}
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
            ...GeneFamily_geneFamily
          }
        }
      }
    }
  `
})
