import React from 'react'
import { QueryRenderer } from 'react-relay'
import environment from './relay-environment'
import graphql from 'babel-plugin-relay/macro'

import { GeneContainer as Gene } from './Gene'
import ArtworkTombstone from './ArtworkTombstone'
import GeneFamily from './GeneFamily'

const getGeneSlugFromUrl = () =>
  document.location.pathname.substring(1) || 'old-master-influenced-fantasy'

export default class App extends React.Component {
  render() {
    return (
      <>
        {/* <Gene slug={getGeneSlugFromUrl()} /> */}
        <QueryRenderer
          environment={environment}
          query={graphql`
            query AppQuery {
              viewer {
                geneFamilies(first: 3) {
                  edges {
                    node {
                      ...GeneFamily_geneFamily
                    }
                  }
                }
              }
            }
          `}
          variables={{}}
          render={({ error, props }) => {
            if (error) {
              return <div>Error! {JSON.stringify(error)}</div>
            }
            if (!props) {
              return <div>Loading...</div>
            }
            // return <pre>{JSON.stringify(props, null, 2)}</pre>
            return (
              <>
                {props.viewer.geneFamilies.edges.map(f => (
                  <GeneFamily key={f.node.__id} geneFamily={f.node} />
                ))}
              </>
            )
          }}
        />
      </>
    )
  }
}
