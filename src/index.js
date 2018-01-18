import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import styled from 'styled-components'
import { Fonts } from './themes/themes.js'

import Stage from './screens/stage/stage.jsx'

const Container = styled.main`
    font-family: ${Fonts.familyBody};
`;

class App extends Component {
  render() {
    return <Container>
      <Stage />
    </Container>
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
