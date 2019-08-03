import React from 'react'
import styled from 'styled-components'
import { createFragmentContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

import { Link, Sans } from '@artsy/palette'

const GeneFamilyNavLink = props => {
  return (
    <>
      <AllCapsLink
        href={`#${props.geneFamily.slug}`}
        hoverColor="purple100"
        noUnderline={true}
        underlineBehavior="none"
      >
        <Sans size={3} weight="medium" my={2}>
          {props.geneFamily.name}
        </Sans>
      </AllCapsLink>
    </>
  )
}

const AllCapsLink = styled(Link)`
  text-transform: uppercase;
  letter-spacing: 0.03em;
  &:hover {
    text-decoration: none;
  }
`

export default createFragmentContainer(GeneFamilyNavLink, {
  geneFamily: graphql`
    fragment GeneFamilyNavLink_geneFamily on GeneFamily {
      slug
      name
    }
  `
})
