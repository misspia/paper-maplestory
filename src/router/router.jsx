import React, { Component } from 'react';
import { HashRouter, Route, Switch, NavLink } from 'react-router-dom'

import { Container, Nav } from './router.styles.js'
import Routes from './routes.js'

class TempNav extends Component {
  render() {
    return <Nav>
      <NavLink exact to='/'>home</NavLink>
      <NavLink to={Routes.toScene('maple_hill')}>maple</NavLink>
      <NavLink to={Routes.toScene('henesys')}>henesys</NavLink>
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

class Scene extends Component {
  render() {
    return <div>
      scene
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
  				<Route path={Routes.scene} component={Scene}/>
  			</Switch>
  		</Container>
  	</HashRouter>
  }
}

export default AppRouter;
