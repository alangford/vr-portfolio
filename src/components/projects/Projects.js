import React from 'react'
import {Entity} from 'aframe-react';

import * as pong from './assets/pong.png'
import * as tetris from './assets/tetris.png'


const Projects = () => [
  <Entity text={{value: 'Andrew\'s Projects', height:"15", width:"15", align: 'center'}} rotation='0 0 0' position={{x: 0, y: 8.5, z: -10}}/> ,
  <Entity primitive='a-box' height="2" width="8" color="brown"  position={{x: 0, y: 8.5, z: -10.5}}/>,
  <Entity primitive='a-box' height="10" width="25"  color="black" position={{x: 0, y: 5, z: -11.5}}/>,

  <a-assets>
      <img id="PONG" src={pong}/>
      <img id="TETRIS" src={tetris}/>
    </a-assets>,
    <a-link href='' title='Pong' image="#PONG" position='-2 1 -9.5' />,
    <a-image href='' src="#TETRIS" position='2 1 -9.5' />,
];

export default Projects