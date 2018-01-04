import React, { Component } from 'react';
import {Entity, Scene} from 'aframe-react';

import * as js from './assets/js.png'
import * as reac from './assets/react.png'
import * as native from './assets/react_native.png'
import * as angular from './assets/angularjs.png'
import * as jq from './assets/jquery.png'

import * as node from './assets/nodejs.png'
import * as java from './assets/java.jpg'
import * as go from './assets/go.jpg'
import * as ruby from './assets/ruby.png'


import * as mongodb from './assets/mongodb.png'
import * as mysql from './assets/mysql.png'
import * as pg from './assets/postgresqll.png'
import * as sqlite from './assets/sqllite.png'

import * as nginx from './assets/nginx.png'
import * as docker from './assets/docker.png'
import * as aws from './assets/aws.png'

import * as wp from './assets/webpack.png'
import * as gulp from './assets/gulp.png'
import * as git from './assets/git.jpg'
const Skills = () => {
        
  return [     
        <a-assets>
          {/* frontend */}
          <img id="JS" src={js}/>
          <img id="ANGULAR" src={angular}/>
          <img id="REACT" src={reac}/>
          <img id="NATIVE" src={native}/>
          <img id="JQUERY" src={jq}/>
          {/* backend */}
          <img id="NODE" src={node}/>
          <img id="JAVA" src={java}/>
          <img id="GO" src={go}/>
          <img id="RUBY" src={ruby}/>
          {/* db */}
          <img id="MONGO" src={mongodb}/>
          <img id="MYSQL" src={mysql}/>
          <img id="POSTGRES" src={pg}/>
          <img id="SQLLITE" src={sqlite}/>
          {/* devops */}
          <img id="NGINX" src={nginx}/>
          <img id="DOCKER" src={docker}/>
          <img id="AWS" src={aws}/>
          {/* misc */}
          <img id="WEBPACK" src={wp}/>
          <img id="GULP" src={gulp}/>
          <img id="GIT" src={git}/>
        </a-assets>,
        <Entity text={{value: 'Skills', height:"15", width:"15", align: 'center'}} position={{x: 0, y: 7, z: -4.5}}/> ,
        <Entity primitive='a-box' height="2" width="8" color="black" position={{x: 0, y: 7, z: -5}}/>,
        <Entity primitive='a-box' height="10" width="10" color="black" position={{x: 0, y: 5, z: -6}}/>,
        // backend
        <Entity primitive='a-box' src="#NODE" height="1" width="1" position={{x: -3, y: 1, z: -5}} />,
        <Entity primitive='a-box' src="#JAVA" height="1" width="1" position={{x: -3, y: 2.5, z: -5}} />,
        <Entity primitive='a-box' src="#GO" height="1" width="1" position={{x: -3, y: 4, z: -5}} />,
        <Entity primitive='a-box' src="#RUBY" height="1" width="1" position={{x: -3, y: 5.5, z: -5}} />,

        //devops
        <Entity primitive='a-box' src="#NGINX" height="1" width="1" position={{x: -1.5, y: 1, z: -5}} />,
        <Entity primitive='a-box' src="#DOCKER" height="1" width="1" position={{x: -1.5, y: 2.5, z: -5}} />,
        <Entity primitive='a-box' src="#AWS" height="1" width="1" position={{x: -1.5, y: 4, z: -5}} />,


        // frontend
        <Entity primitive='a-box' src="#JS" height="1" width="1" position={{x: 0, y: 1, z: -5}} />,
        <Entity primitive='a-box' src="#JQUERY" height="1" width="1" position={{x: 0, y: 2.5, z: -5}} />,
        <Entity primitive='a-box' src="#ANGULAR" height="1" width="1" position={{x: 0, y: 4, z: -5}} />,
        <Entity primitive='a-box' src="#REACT" height="1" width="1" position={{x: 0, y: 5.5, z: -5}} />,
        <Entity primitive='a-box' src="#NATIVE" height="1" width="1" position={{x: 1.5, y: 5.5, z: -5}} />,

        //misc
        <Entity primitive='a-box' src="#WEBPACK" height="1" width="1" position={{x: 1.5, y: 1, z: -5}} />,
        <Entity primitive='a-box' src="#GULP" height="1" width="1" position={{x: 1.5, y: 2.5, z: -5}} />,
        <Entity primitive='a-box' src="#GIT" height="1" width="1" position={{x: 1.5, y: 4, z: -5}} />,

        // db
        <Entity primitive='a-box' src="#MONGO" height="1" width="1" position={{x: 3, y: 1, z: -5}} />,
        <Entity primitive='a-box' src="#MYSQL" height="1" width="1" position={{x: 3, y: 2.5, z: -5}} />,
        <Entity primitive='a-box' src="#POSTGRES" height="1" width="1" position={{x: 3, y: 4, z: -5}} />,
        <Entity primitive='a-box' src="#SQLLITE" height="1" width="1" position={{x: 3, y: 5.5, z: -5}} />,

        <Entity json-model  src='./goku/goku.json' scale={{x:0, y:0, z:4}} />

  ]
}
export default Skills