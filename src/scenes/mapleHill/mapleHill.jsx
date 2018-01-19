import React, { Component } from 'react'
import Parallax from 'parallax-js'
import {
  SceneContainer,
  Layer1, Layer2, Layer3, Layer4
} from './mapleHill.styles.js'

import Layers from './mapleHill.layers.js'

// https://andwecode.com/creating-animated-banner-with-parallax-js/
// http://matthew.wagerfield.com/parallax/

class MapleHill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scene: {}
    }
  }
  componentDidMount() {
    const config = {
      relativeInput: true,
      scalarX: 30.0,
      scalarY: 5.0,
    };
    this.setState({
      scene: new Parallax(this.container, config)
    })
  }
  componentWillUnmount() {
    this.state.scene.destroy();
  }
  render() {
    return <SceneContainer innerRef={ ref => this.container = ref}>
        <Layer1 data-depth='0.9'>
          <div>background</div>
        </Layer1>
        <Layer2 data-depth='0.8'>
          <div>hill</div>
        </Layer2>
        <Layer3 data-depth='0.7'>
          <div>mid scene</div>
        </Layer3>
        <Layer4 data-depth='0.5'>
          <div>foreground</div>
        </Layer4>
    </SceneContainer>
  }
}

export default MapleHill;
