import React from 'react'
import { createFragmentContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

import GeneFamilyNavLink from './GeneFamilyNavLink'

const GeneFamilyNav = props => {
  return (
    <nav>
      {props.viewer.geneFamilies.edges.map(({ node }) => (
        <GeneFamilyNavLink key={node.__id} geneFamily={node} />
      ))}
    </nav>
  )
}

export default createFragmentContainer(GeneFamilyNav, {
  viewer: graphql`
    fragment GeneFamilyNav_viewer on Viewer {
      geneFamilies(first: 20)
        @connection(key: "GeneFamilyNav_geneFamilies", filters: []) {
        edges {
          node {
            ...GeneFamilyNavLink_geneFamily
          }
        }
      }
    }
  `
})
