import React from 'react'
import { GeneContainer as Gene } from './Gene'

const getGeneSlugFromUrl = () =>
  document.location.pathname.substring(1) || 'old-master-influenced-fantasy'

export default class App extends React.Component {
  render() {
    return <Gene slug={getGeneSlugFromUrl()} />
  }
}
