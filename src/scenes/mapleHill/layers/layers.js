import Background from './background.jsx'
import { CloudsBack, CloudsMid, CloudsFront } from './clouds.jsx'
import { Hill, Tree, Leaves, Thief } from './hill.jsx'

const Layers = [
  {
    depth: 0.1,
    component: Background
  },
  {
    depth: 0.1,
    component: CloudsBack
  },
  {
    depth: 0.1,
    component: CloudsMid
  },
  {
    depth: 0.1,
    component: CloudsFront
  },
  {
    depth: 0.1,
    component: Hill,
  },
  {
    depth: 0.1,
    component: Tree
  },
  {
    depth: 0.1,
    component: Leaves
  },
  {
    depth: 0.1,
    component: Thief
  },

]

export default Layers;
