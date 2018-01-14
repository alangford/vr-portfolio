import React from 'react';
import {Entity, Scene} from 'aframe-react';


const Roof = () => [
  <Entity primitive='a-box' height='17' width='23' src='#WALL2' rotation='-60 90 0' position={{x:7, y:10, z: 0}} />,
  <Entity primitive='a-box' height='17' width='23' src='#WALL2' rotation='60 90 0' position={{x:-7, y:10, z: 0}} />,
  <Entity primitive='a-box' height='17' width='23' src='#WALL2' rotation='-60 90 0' position={{x:7, y:11, z: 0}} />,
  <Entity primitive='a-box' height='17' width='23' src='#WALL2' rotation='60 90 0' position={{x:-7, y:11, z: 0}} />,
  <Entity primitive='a-box' height='17' width='23' src='#WALL2' rotation='-60 90 0' position={{x:7, y:12, z: 0}} />,
  <Entity primitive='a-box' height='17' width='23' src='#WALL2' rotation='60 90 0' position={{x:-7, y:12, z: 0}} />,
];

export default Roof;