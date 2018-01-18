import React from 'react'
import {Entity} from 'aframe-react';

import * as adobe from './assets/adobe.png';
import * as bgs from './assets/bgs.png';
import * as pong from './assets/pong.png';
import * as seek from './assets/seek.png';
import * as tetris from './assets/tetris.png'
import * as w3 from './assets/w3clone.png';
import * as otl from './assets/otl.png'

const Projects = () => [
  <Entity text={{value: 'Andrew\'s Projects', height:"15", width:"15", align: 'center'}} rotation='0 0 0' position={{x: 0, y: 8.5, z: -10}}/> ,
  <Entity primitive='a-box' height="3" width="22" src='#WALL2'  position={{x: 0, y: 8.5, z: -10.5}}/>,

  <a-assets>
      <img id="ADOBE" src={adobe}/>
      <img id="BGS" src={bgs}/>
      <img id="PONG" src={pong}/>
      <img id="OTL" src={otl}/>
      <img id="TETRIS" src={tetris}/>
      <img id="W3" src={w3}/>
      <img id="SEEK" src={seek}/>
    </a-assets>,
    <Entity text={{value: 'Adobe Clone', height:"5", width:"5", align: 'center'}} rotation='0 0 0' position={{x: -3, y: 2, z: -9}}/> ,
    <a-image href='http://adobe.andrewlangford.net' src="#ADOBE" position='-3 1 -9.5' />,
    <Entity text={{value: 'BoardGameShelf.net', height:"5", width:"5", align: 'center'}} rotation='0 0 0' position={{x: -1, y: 2, z: -9}}/> ,
    <a-image href='https://www.boardgameshelf.net' src="#BGS" position='-1 1 -9.5' />,
    <Entity text={{value: 'Pong in JS', height:"5", width:"5", align: 'center'}} rotation='0 0 0' position={{x: 1, y: 2, z: -9}}/> ,
    <a-image href='http://pong.andrewlangford.net' src="#PONG" position='1 1 -9.5' />,
    <Entity text={{value: 'A Heat Map App', height:"5", width:"5", align: 'center'}} rotation='0 0 0' position={{x: 3, y: 2, z: -9}}/> ,
    <a-image href='http://seek.andrewlangford.net' src="#SEEK" position='3 1 -9.5' />,
    <Entity text={{value: 'A React-Native App', height:"5", width:"5", align: 'center'}} rotation='0 0 0' position={{x: -3, y: 5, z: -9}}/> ,
    <a-image href='https://github.com/Dream-Team99/On-The-Line-app' src="#OTL" position='-3 4 -9.5' />,
    <Entity text={{value: 'Tetris in JS', height:"5", width:"5", align: 'center'}} rotation='0 0 0' position={{x: 0, y: 5, z: -9}}/> ,
    <a-image href='http://tetris.andrewlangford.net' src="#TETRIS" position='0 4 -9.5' />,
    <Entity text={{value: 'w3schools clone', height:"5", width:"5", align: 'center'}} rotation='0 0 0' position={{x: 3, y: 5, z: -9}}/> ,
    <a-image href='http://w3clone.andrewlangford.net' src="#W3" position='3 4 -9.5' />,

];

export default Projects