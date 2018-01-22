const HOME_ROUTE = '/';
const MAP_ROUTE = '/map/';
const SCENE_ROUTE = '/scene/';

const Routes = {
  home: HOME_ROUTE,
  map: MAP_ROUTE,
  sketch: `${SCENE_ROUTE}:name`,

  toScene: (name) => {
    return `${SCENE_ROUTE}${name}`;
  }
}

export default Routes;
