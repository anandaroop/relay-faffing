import React from 'react'
import styled from 'styled-components'
import { color, Box, Serif } from '@artsy/palette'

export default function App() {
  return (
    <Main>
      <Box m={1}>
        <Serif size="6">Hellooo</Serif>
      </Box>
    </Main>
  )
}

const Main = styled.main`
  padding: 1em;
  background: ${color('black10')};
`
