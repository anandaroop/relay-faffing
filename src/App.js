import React from 'react'
import styled from 'styled-components'
import { Box, Serif, Sans } from '@artsy/palette'
import { QueryRenderer } from 'react-relay'
import environment from './relay-environment'
import graphql from 'babel-plugin-relay/macro'

export default class App extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query AppGeneQuery {
            gene(id: "old-master-influenced-fantasy") {
              slug
              name
              isPublished
              description
            }
          }
        `}
        variables={{}}
        render={({ error, props }) => {
          if (error) {
            return <div>Error! {JSON.stringify(error)}</div>
          }
          if (!props) {
            return <GeneSpinner />
          }
          return <Gene {...props} />
        }}
      />
    )
  }
}

const Gene = ({ gene }) => (
  <Box mx="auto" my={4} width={0.5}>
    <Serif size="5t" my={2}>
      {gene.isPublished ? (
        <a href={`https://www.artsy.net/gene/${gene.slug}`}>{gene.name}</a>
      ) : (
        gene.name
      )}
    </Serif>
    <Sans size="3">{gene.description}</Sans>
  </Box>
)

const GeneSpinner = () => (
  <Box mx="auto" my={4} width={0.5}>
    <GrayBlock />
  </Box>
)

const GrayBlock = styled.div`
  width: 100%;
  height: 10em;
  background: #eee;
`
