import React from 'react'
import styled from 'styled-components'
import { Box, Serif, Sans } from '@artsy/palette'
import { QueryRenderer } from 'react-relay'
import environment from './relay-environment'
import graphql from 'babel-plugin-relay/macro'
import ReactMarkdown from 'react-markdown'

export default class App extends React.Component {
  render() {
    const slug =
      document.location.pathname.substring(1) || 'old-master-influenced-fantasy'
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query AppGeneQuery($slug: String!) {
            gene(id: $slug) {
              slug
              name
              isPublished
              description
            }
          }
        `}
        variables={{ slug }}
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
    <Sans size="8" my={2}>
      {gene.isPublished ? (
        <a href={`https://www.artsy.net/gene/${gene.slug}`}>{gene.name}</a>
      ) : (
        gene.name
      )}
    </Sans>
    <Serif size="3">
      <ReactMarkdown source={gene.description} />
    </Serif>
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
