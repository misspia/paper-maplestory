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
  position: relative;

  overflow: hidden;

`;

const Layer = styled.div`
  height: 100%;
  width: 100%;
  opacity: 1;

  position: relative;
  display: flex !important;
  align-items: center;
  justify-content: center;

  div {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
  }

`;

// back to front
export const Layer1 = Layer.extend`
  border: solid 1px rgba(255, 0, 0, 0.5);
  div{
    background-color: rgba(255, 0, 0, 0.5);
    width: 200%;
    height: 150%;
  }
`;

export const Layer2 = Layer.extend`
  border: solid 1px rgba(255, 0, 255, 0.5);
  div{
    background-color: rgba(255, 0, 255, 0.5);
    height: 50%;
    width: 80%;
    bottom: 5em;
    left: 0;
  }
`;

export const Layer3 = Layer.extend`
  border: solid 1px rgba(0, 255, 0, 0.5);
  div{
    background-color: rgba(0, 255, 0, 0.5);
    height: 12em;
    width: 14em;
    right: 5em;
    bottom: 4em;
  }
`;

export const Layer4 = Layer.extend`
  border: solid 1px rgba(0, 0, 255, 0.5);
  div{
    background-color: rgba(0, 0, 255, 0.5);
    height: 6em;
    width: 200%;

    bottom: 0;
  }
`;
