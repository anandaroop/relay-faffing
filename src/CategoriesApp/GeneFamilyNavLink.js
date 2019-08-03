import React from 'react'
import { createFragmentContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

import { Link, Sans } from '@artsy/palette'

const GeneFamilyNavLink = props => {
  return (
    <>
      <Link
        href={`#${props.geneFamily.slug}`}
        hoverColor="purple100"
        noUnderline={true}
        underlineBehavior="none"
        onClick={e => {
          e.preventDefault()
          const id = e.target.parentNode.href.split('#')[1]
          document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
        }}
      >
        <Sans size={3} weight="medium" py={1}>
          {props.geneFamily.name}
        </Sans>
      </Link>
    </>
  )
}

export default createFragmentContainer(GeneFamilyNavLink, {
  geneFamily: graphql`
    fragment GeneFamilyNavLink_geneFamily on GeneFamily {
      slug
      name
    }
  `
})
