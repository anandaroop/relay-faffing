import React from 'react'
import { QueryRenderer } from 'react-relay'
import environment from '../relay-environment'
import graphql from 'babel-plugin-relay/macro'

import GeneFamilies from './GeneFamilies'

export default class CategoriesApp extends React.Component {
  render() {
    return (
      <>
        <QueryRenderer
          environment={environment}
          query={graphql`
            query CategoriesAppQuery {
              viewer {
                ...GeneFamilies_viewer
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
              <GeneFamilies viewer={props.viewer} />
            )
          }}
        />
      </>
    )
  }
}
