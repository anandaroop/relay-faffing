import React from 'react'
import { createFragmentContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import { Box, Serif, Sans } from '@artsy/palette'

const ArtworkTombstone = ({ artwork }) => (
  <Box textAlign="center">
    <img src={artwork.imageUrl} alt={artwork.title} />
    <Sans size="5">{artwork.title}</Sans>
    <Serif size="2">{artwork.artist.name}</Serif>
  </Box>
)

export default createFragmentContainer(ArtworkTombstone, {
  artwork: graphql`
    fragment ArtworkTombstone_artwork on Artwork {
      title
      imageUrl
      artist {
        name
      }
    }
  `
})
