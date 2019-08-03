import React from 'react'
import { createFragmentContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

const GeneFamily = props => {
  // return <pre>{JSON.stringify(props, null, 2)}</pre>
  return (
    <div>
      <h1>{props.geneFamily.name}</h1>
      <p>
        {props.geneFamily.slug}
      </p>
    </div>
  )
}

export default createFragmentContainer(GeneFamily, {
  geneFamily: graphql`
  fragment GeneFamily_geneFamily on GeneFamily {
    slug
    name
  }
  `
})
