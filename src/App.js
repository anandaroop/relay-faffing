import React from 'react'
import { QueryRenderer } from 'react-relay'
import environment from './relay-environment'
import graphql from 'babel-plugin-relay/macro'

import { GeneContainer as Gene } from './Gene'
import ArtworkTombstone from './ArtworkTombstone'

const getGeneSlugFromUrl = () =>
  document.location.pathname.substring(1) || 'old-master-influenced-fantasy'

export default class App extends React.Component {
  render() {
    return (
      <>
        <Gene slug={getGeneSlugFromUrl()} />
        <QueryRenderer
          environment={environment}
          query={graphql`
            query AppQuery($slug: String!) {
              artwork(id: $slug) {
                ...ArtworkTombstone_artwork
              }
            }
          `}
          variables={{ slug: 'nicola-verlato-obversion-no-5' }}
          render={({ error, props }) => {
            if (error) {
              return <div>Error! {JSON.stringify(error)}</div>
            }
            if (!props) {
              return <div>Loading...</div>
            }
            return <ArtworkTombstone {...props} />
          }}
        />
      </>
    )
  }
}
