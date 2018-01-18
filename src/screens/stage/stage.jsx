import React, { Component } from 'react'
import { Container } from './stage.styles.js'

import MapleHill from '../../scenes/mapleHill/mapleHill.jsx'

class Stage extends Component {
  render() {
    return <Container>
        <MapleHill />
    </Container>
  }
}

export default Stage;
