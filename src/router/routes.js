const HOME_ROUTE = '/';
const WORLD_ROUTE = '/map/';
const STAGE_ROUTE = '/scene/';

const Routes = {
  home: HOME_ROUTE,
  world: WORLD_ROUTE,
  stage: `${STAGE_ROUTE}:name`,

  toStage: (scene) => {
    return `${STAGE_ROUTE}${scene}`;
  }
}

export default Routes;
