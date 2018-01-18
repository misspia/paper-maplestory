import styled from 'styled-components'
import { Styles } from '../../themes/themes.js'

// export const SceneContainer = Styles.SceneContainer.extend`
//   border: solid red 1px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//
//   overflow: hidden;
//
//   & > div {
//     height: 5em;
//     width: 5em;
//     position: absolute !important;
//   }
//   .layer1 {
//       background-color: red;
//       opacity: 0.9;
//       height: 5em;
//       width: 5em;
//       top: 100px;
//   }
//   .layer2 {
//       background-color: blue;
//       opacity: 0.9;
//   }
//   .layer3 {
//       background-color: pink;
//       opacity: 0.9;
//       top: 20%;
//   }
//   .layer4 {
//       background-color: green;
//       opacity: 0.9;
//       height: 5em;
//       width: 5em;
//   }
//
// `;

export const SceneContainer = Styles.SceneContainer.extend`
  border: solid red 1px;
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;

`;

const Layer = styled.div`
  height: 5em;
  width: 5em;
  position: absolute !important;
  opacity: 0.9;
`;

export const Layer1 = Layer.extend`
  background-color: red;
`;

export const Layer2 = Layer.extend`
  background-color: blue;
`;

export const Layer3 = Layer.extend`
  background-color: green;
`;

export const Layer4 = Layer.extend`
  background-color: pink;
`;
