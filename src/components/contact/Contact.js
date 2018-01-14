import React, { Component } from 'react';
import {Entity, Scene} from 'aframe-react';

import * as github from './assets/github.png';
import * as linkedin from './assets/linkedin.png';
import * as website from './assets/website.png';
import * as portrait from './assets/portrait.jpg';



const Contact = () => [
    <a-assets>
      <img id="GITHUB" src={github}/>
      <img id="LINKEDIN" src={linkedin}/>
      <img id="WEBSITE" src={website}/>
      <img id="PORTRAIT" src={portrait}/>
    </a-assets>,
    <Entity text={{value: 'Contact Andrew!', height:"15", width:"15", align: 'center'}} rotation='0 -90 0' position={{x: 9.5, y: 7.5, z: 0}}/> ,
    <Entity primitive='a-box' height="2" width="8" src='#WALL3' rotation='0 90 0' position={{x: 10, y: 7.5, z: -0}}/>,
   <Entity primitive='a-box' height="10" width="22" rotation='0 90 0' src='#WALL' position={{x: 11, y: 5, z: -0}}/>,

    <Entity text={{value: 'Phone: 801-694-7838', height:"10", width:"10", align: 'center'}} rotation='0 -90 0' position={{x: 10.5, y: 5, z: 4}}/> ,
    <a-box src="#PORTRAIT" height='2' width='2' rotation='0 -90 0' position='10.5 5 0'/>,
    <Entity text={{value: 'Email: a.b.l.2142@gmail.com', height:"10", width:"10", align: 'center'}} rotation='0 -90 0' position={{x: 10.5, y: 5, z: -4.5}}/> ,
    
    <Entity text={{value: 'Website', height:"5", width:"5", align: 'center'}} rotation='0 -90 0' position={{x: 10.5, y: 3.5, z: -3}}/> ,
    <a-box href="http://andrewlangford.net/" height='2' width='2' title="My Homepage" src="#WEBSITE" rotation='0 -90 0' position='10.5 2 -3' />,
    <Entity text={{value: 'Linkedin', height:"5", width:"5", align: 'center'}} rotation='0 -90 0' position={{x: 10.5, y: 3.5, z: 0}}/> ,
    <a-box href='https://www.linkedin.com/in/andrewbl/' height='2' width='2'  src="#LINKEDIN" rotation='0 -90 0' position='10.5 2 0' />,
    <Entity text={{value: 'Github', height:"5", width:"5", align: 'center'}} rotation='0 -90 0' position={{x: 10.5, y: 3.5, z: 3}}/> ,
    <a-box href="https://github.com/bolty2142" height='2' width='2' src="#GITHUB" rotation='0 -90 0' position='10.5 2 3' />


];


export default Contact