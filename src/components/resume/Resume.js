import React from 'react'
import {Entity} from 'aframe-react';

import * as resume from './assets/resume.png'

const Resume = () => [
  <Entity text={{value: 'Andrew\'s Resume', height:"15", width:"15", align: 'center'}} rotation='0 180 0' position={{x: 0, y: 8.5, z: 9.5}}/> ,
  <Entity primitive='a-box' height="2" width="8" color="brown"  position={{x: 0, y: 8.5, z: 10}}/>,
  <Entity primitive='a-box' height="10" width="25"  color="black" position={{x: 0, y: 5, z: 11}}/>,

  <a-assets>
      <img id="RESUME" src={resume}/>
    </a-assets>,
    <a-box height='8' width='6'  src="#RESUME" position='0 3 9.5' />,
];

export default Resume