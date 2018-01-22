import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import AppRouter from './router/router.jsx'

import styled from 'styled-components'
import { Fonts } from './themes/themes.js'

import Stage from './screens/stage/stage.jsx'

const Container = styled.main`
    font-family: ${Fonts.familyBody};
    font-size: 1em;
`;

// class App extends Component {
//   render() {
//     return <Container>
//       <Stage />
//     </Container>
//   }
// }

ReactDOM.render(<AppRouter />, document.getElementById('app'));
