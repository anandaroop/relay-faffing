import React from 'react'
import { Box, Serif } from '@artsy/palette'

const Header = () => {
  return (
    <Box>
      <Serif size={12}>The Art Genome Project</Serif>
      <Serif size={5} my={4}>
        The Art Genome Project is the classification system and technological
        framework that powers Artsy. It maps the characteristics (we call them
        “genes”) that connect artists, artworks, architecture, and design
        objects across history. There are currently over 1,000 characteristics
        in The Art Genome Project, including art historical movements, subject
        matter, and formal qualities.
      </Serif>
    </Box>
  )
}

export default Header
