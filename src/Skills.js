import React, { Component } from 'react';
import {Entity} from 'aframe-react';

import * as js from './assets/js.png'
import * as reac from './assets/react.png'
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
        <Entity text={{value: 'Andrew\'s Skills', height:"15", width:"15", align: 'center'}} rotation='0 90 0' position={{x: -9.5, y: 7.5, z: -0}}/> ,
        <Entity primitive='a-box' height="2" width="8" src='#WALL3' rotation='0 90 0' position={{x: -10, y: 7.5, z: -0}}/>,
        <Entity primitive='a-box' height="10" width="22" rotation='0 90 0' src='#WALL' position={{x: -11, y: 5, z: -0}}/>,

        // backend
        <Entity primitive='a-box' src="#NODE" height="1" width="1" rotation='0 90 0' position={{x: -10.5, y: 1, z: -7}} />,
        <Entity text={{value: 'Node.js', height:"10", width:"10", align: 'center'}} rotation='0 90 0' position={{x: -10.5, y: 1, z: -9}}/> ,
        <Entity primitive='a-box' src="#JAVA" height="1" width="1" rotation='0 90 0' position={{x: -10.5, y: 2.5, z: -7}} />,
        <Entity text={{value: 'Java', height:"10", width:"10", align: 'center'}} rotation='0 90 0' position={{x: -10.5, y: 2.5, z: -9}}/> ,
        <Entity primitive='a-box' src="#GO" height="1" width="1" rotation='0 90 0' position={{x: -10.5, y: 4, z: -7}} />,
        <Entity text={{value: 'Go', height:"10", width:"10", align: 'center'}} rotation='0 90 0' position={{x: -10.5, y: 4, z: -9}}/> ,
        <Entity primitive='a-box' src="#RUBY" height="1" width="1" rotation='0 90 0' position={{x: -10.5, y: 5.5, z: -7}} />,
        <Entity text={{value: 'Ruby', height:"10", width:"10", align: 'center'}} rotation='0 90 0' position={{x: -10.5, y: 5.5, z: -9}}/> ,

        //devops
        <Entity primitive='a-box' src="#NGINX" height="1" width="1" rotation='0 90 0' position={{x: -10.5, y: 1, z: -3.5}} />,
        <Entity text={{value: 'Nginx', height:"10", width:"10", align: 'center'}} rotation='0 90 0' position={{x: -10.5, y: 1, z: -5}}/> ,
        <Entity primitive='a-box' src="#DOCKER" height="1" width="1" rotation='0 90 0' position={{x: -10.5, y: 2.5, z: -3.5}} />,
        <Entity text={{value: 'Docker', height:"10", width:"10", align: 'center'}} rotation='0 90 0' position={{x: -10.5, y: 2.5, z: -5}}/> ,
        <Entity primitive='a-box' src="#AWS" height="1" width="1" rotation='0 90 0' position={{x: -10.5, y: 4, z: -3.5}} />,
        <Entity text={{value: 'AWS', height:"10", width:"10", align: 'center'}} rotation='0 90 0' position={{x: -10.5, y: 4, z: -5}}/> ,


        // frontend
        <Entity primitive='a-box' src="#JS" height="1" width="1" rotation='0 90 0' position={{x: -10.5, y: 1, z: 1}} />,
        <Entity text={{value: 'JavaScript', height:"10", width:"10", align: 'center'}} rotation='0 90 0' position={{x: -10.5, y: 1, z: -1}}/> ,
        <Entity primitive='a-box' src="#JQUERY" height="1" width="1" rotation='0 90 0' position={{x: -10.5, y: 2.5, z: 1}} />,
        <Entity text={{value: 'jQuery', height:"10", width:"10", align: 'center'}} rotation='0 90 0' position={{x: -10.5, y: 2.5, z: -1}}/> ,
        <Entity primitive='a-box' src="#ANGULAR" height="1" width="1" rotation='0 90 0' position={{x: -10.5, y: 4, z: 1}} />,
        <Entity text={{value: 'Angular.js', height:"10", width:"10", align: 'center'}} rotation='0 90 0' position={{x: -10.5, y: 4, z: -1}}/> ,
        <Entity primitive='a-box' src="#REACT" height="1" width="1" rotation='0 90 0' position={{x: -10.5, y: 5.5, z: 1}} />,
        <Entity text={{value: 'React', height:"10", width:"10", align: 'center'}} rotation='0 90 0' position={{x: -10.5, y: 5.5, z: -1}}/> ,

        //misc
        <Entity primitive='a-box' src="#WEBPACK" height="1" width="1" rotation='0 90 0' position={{x: -10.5, y: 1, z: 5}} />,
        <Entity text={{value: 'Webpack', height:"10", width:"10", align: 'center'}} rotation='0 90 0' position={{x: -10.5, y: 1, z: 3.5}}/> ,
        <Entity primitive='a-box' src="#GULP" height="1" width="1" rotation='0 90 0' position={{x: -10.5, y: 2.5, z: 5}} />,
        <Entity text={{value: 'Gulp', height:"10", width:"10", align: 'center'}} rotation='0 90 0' position={{x: -10.5, y: 2.5, z: 3.5}}/> ,
        <Entity primitive='a-box' src="#GIT" height="1" width="1" rotation='0 90 0' position={{x: -10.5, y: 4, z: 5}} />,
        <Entity text={{value: 'Git', height:"10", width:"10", align: 'center'}} rotation='0 90 0' position={{x: -10.5, y: 4, z: 3.5}}/> ,

        // db
        <Entity primitive='a-box' src="#MONGO" height="1" width="1" rotation='0 90 0' position={{x: -10.5, y: 1, z: 9}} />,
        <Entity text={{value: 'Mongo', height:"10", width:"10", align: 'center'}} rotation='0 90 0' position={{x: -10.5, y: 1, z: 7}}/> ,
        <Entity primitive='a-box' src="#MYSQL" height="1" width="1" rotation='0 90 0' position={{x: -10.5, y: 2.5, z: 9}} />,
        <Entity text={{value: 'MySql', height:"10", width:"10", align: 'center'}} rotation='0 90 0' position={{x: -10.5, y: 2.5, z: 7}}/> ,
        <Entity primitive='a-box' src="#POSTGRES" height="1" width="1" rotation='0 90 0' position={{x: -10.5, y: 4, z: 9}} />,
        <Entity text={{value: 'PostgresSQL', height:"10", width:"10", align: 'center'}} rotation='0 90 0' position={{x: -10.5, y: 4, z: 7}}/> ,
        <Entity primitive='a-box' src="#SQLLITE" height="1" width="1" rotation='0 90 0' position={{x: -10.5, y: 5.5, z: 9}} />,
        <Entity text={{value: 'SqlLite', height:"10", width:"10", align: 'center'}} rotation='0 90 0' position={{x: -10.5, y: 5.5, z: 7}}/> ,


  ]
}
export default Skills