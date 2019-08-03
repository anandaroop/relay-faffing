import React from 'react'
import { QueryRenderer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import { Box, Flex } from '@artsy/palette'

import environment from '../relay-environment'
import Header from './Header'
import GeneFamilies from './GeneFamilies'
import GeneFamilyNav from './GeneFamilyNav'

const CategoriesAppQuery = graphql`
  query CategoriesAppQuery {
    viewer {
      ...GeneFamilyNav_viewer
      ...GeneFamilies_viewer
    }
  }
`

const CategoriesApp = props => (
  <Box
    // background={['yellow', 'orange', 'pink', 'cyan', 'magenta']}
    p={4}
    width={[1, 1, 1, 1024]}
    m="auto"
  >
    <Flex justifyContent="space-between">
      <Box width={[0, 0, 0, 0.33]} display={['none', 'none', 'none', 'block']} pr={3}>
        <GeneFamilyNav viewer={props.viewer} />
      </Box>
      <Box width={[1, 1, 1, 0.67]} pl={3}>
        <Header />
        <GeneFamilies viewer={props.viewer} />
      </Box>
    </Flex>
  </Box>
)

export default class CategoriesAppContainer extends React.Component {
  render() {
    return (
      <>
        <QueryRenderer
          environment={environment}
          query={CategoriesAppQuery}
          variables={{}}
          render={({ error, props }) => {
            if (error) {
              return <div>Error! {JSON.stringify(error)}</div>
            }
            if (!props) {
              return <div>Loading...</div>
            }
            // return <pre>{JSON.stringify(props, null, 2)}</pre>
            return <CategoriesApp viewer={props.viewer} />
          }}
        />
      </>
    )
  }
}
