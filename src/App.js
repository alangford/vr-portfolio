import React, { Component } from 'react';
import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import * as sky from './assets/sky3.jpg'
import * as floor from './assets/floor.jpg'

import Skills from './components/skills/Skills'

class App extends Component {

  constructor() {
    super();
    this.state = {color: 'red'};
  }

  render() {
    return (
      <Scene>
        <a-assets>
          <img id="groundTexture" src={floor}/>
          <img id="skyTexture" src={sky}/>
        </a-assets>

        <Entity primitive="a-plane" src="#groundTexture" rotation="-90 0 0" height="100" width="100"/>
        <Entity primitive="a-light" type="ambient" color="#445451"/>
        <Entity primitive="a-light" type="point" intensity="1" position="4 4 4"/>
        <Entity primitive="a-sky" height="2048" radius="30" src="#skyTexture" theta-length="90" width="2048"/>
        <Entity particle-system={{preset: 'snow', particleCount: 2000}}/>
        <Entity text={{value: 'Hello! Welcome to my interactive portfolio'}} position={{x: 5, y: 2, z: -1}}/>

        {/* skills */}
        <Skills />


        <Entity primitive="a-camera">
          <Entity primitive="a-cursor" animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150}}/>
        </Entity>
      </Scene>
    );
  }
}

export default App;
