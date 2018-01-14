import React from 'react'
import {Entity} from 'aframe-react';

import * as pong from './assets/pong.png'
import * as tetris from './assets/tetris.png'


const Projects = () => [
  <Entity text={{value: 'Andrew\'s Projects', height:"15", width:"15", align: 'center'}} rotation='0 0 0' position={{x: 0, y: 8.5, z: -10}}/> ,
  <Entity primitive='a-box' height="3" width="22" src='#WALL2'  position={{x: 0, y: 8.5, z: -10.5}}/>,

  <a-assets>
      <img id="PONG" src={pong}/>
      <img id="TETRIS" src={tetris}/>
    </a-assets>,
    <a-image href='' src="#PONG" position='-2 1 -9.5' />,
    <a-image href='' src="#TETRIS" position='2 1 -9.5' />,
];

export default Projects