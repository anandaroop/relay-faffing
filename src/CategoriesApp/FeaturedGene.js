import React from 'react'
import styled from 'styled-components'

import { Box, Link, Image, Sans } from '@artsy/palette'

const FeaturedGenes = props => {
  // return <pre>{JSON.stringify(props, null, 2)}</pre>
  return (
    <Link
      href={`https://www.artsy.net${props.gene.href}`}
      noUnderline={true}
      color="white"
      hoverColor="white"
    >
      <Box position="relative">
        <Image src={props.gene.image.url} alt={props.gene.title} width={1} />
        <Box position="absolute" bottom={0} left={0} width={1} p={2}>
          <ShadowedSans size="3" weight="medium">
            {props.gene.title}
          </ShadowedSans>
        </Box>
      </Box>
    </Link>
  )
}

const ShadowedSans = styled(Sans)`
  text-shadow: 0px 0px 10px #333;
`

export default FeaturedGenes
