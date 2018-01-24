import React, { Component } from 'react';
import { HashRouter, Route, Switch, NavLink } from 'react-router-dom'

import { Container, Nav } from './router.styles.js'
import Routes from './routes.js'

import World from '../screens/world/world.jsx'
import Stage from '../screens/stage/stage.jsx'

class TempNav extends Component {
  render() {
    return <Nav>
      <NavLink exact to='/'>home</NavLink>
      <NavLink to={Routes.world}>world map</NavLink>
      <NavLink to={Routes.toStage('maple_hill')}>maple</NavLink>
      <NavLink to={Routes.toStage('henesys')}>henesys</NavLink>
    </Nav>
  }
}

class Home extends Component {
  render() {
    return <div>
      home
    </div>
  }
}


class AppRouter extends Component {
  render() {
    return <HashRouter>
  		<Container>
        <TempNav />
  			<Switch>
  				<Route exact path={Routes.home} component={Home}/>
  				<Route path={Routes.world} component={World}/>
  				<Route path={Routes.stage} component={Stage}/>
  			</Switch>
  		</Container>
  	</HashRouter>
  }
}

export default AppRouter;
