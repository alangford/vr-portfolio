import React, { Component } from 'react';
import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'aframe-href-component';
import { withStyles } from 'material-ui/styles';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';
import { CircularProgress } from 'material-ui/Progress';
import CheckIcon from 'material-ui-icons/Check';
import Slide from 'material-ui/transitions/Slide';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';



import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';

import * as sky from './assets/sky5.jpg'
import * as floor from './assets/floor2.jpg'
import * as wall from './assets/wall.jpg'
import * as wall2 from './assets/wall2.jpg'
import * as wall3 from './assets/wall3.jpg'

import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
import Resume from './components/resume/Resume'
import Projects from './components/projects/Projects'
import Roof from './components/Roof'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      showModal: true,
      loading: true
    }
  }
  handleLoading() {
    this.setState({
      loading: false
    })
  }
  closeModal() {
    this.setState({
      showModal: false,
    })
  }
  render() {
    window.onload = () => this.handleLoading()
    const {
      classes,
    } = this.props
    return (
    <Scene>
      <a-assets>
        <img id="groundTexture" src={floor}/>
        <img id="skyTexture" src={sky}/>
        <img id="WALL" src={wall}/>
        <img id="WALL2" src={wall2}/>
        <img id="WALL3" src={wall3}/>
      </a-assets>

      <Entity primitive="a-plane" src="#groundTexture" rotation="-90 0 0" height="100" width="100"/>
      {/* <Entity primitive="a-light" type="ambient" color="#445451"/> */}
      {/* <Entity primitive="a-light" type="point" intensity="1" position="4 4 4"/> */}
      <Entity primitive="a-sky" height="2048" radius="50" src="#skyTexture" theta-length="160" width="2048"/>

      {/* roof */}
      <Roof />

      {/* skills */}
      <Skills />

      {/* contact */}
      <Contact />

      {/* resume */}
      <Resume />

      {/* projects */}
      <Projects />

       <Entity primitive="a-camera">
         <Entity primitive="a-cursor" animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150}}/>
       </Entity>
       <Dialog open={ this.state.showModal } transition={ Slide } onClose={ () => this.closeModal() }>
      <DialogTitle className={ classes.primaryText } >Welcome to my interactive portfolio</DialogTitle>
        <DialogContent className={ classes.contentText }>
          <DialogContentText >
            You can move around with the keys,
          </DialogContentText>
          <DialogContentText>
            [ W = fowards, S = backwards, A = left, D = right ]
          </DialogContentText>
          <Divider />
          <DialogContentText>
            If you are viewing this in non VR, 
          </DialogContentText>
          <DialogContentText>
            hold down left click and drag the mouse to look around.
          </DialogContentText>
          <Divider />
          <DialogContentText>
            {this.state.loading ? 'Loading... ' : 'Done '}
          </DialogContentText>
          {this.state.loading ? <CircularProgress /> : <CheckIcon />}
        </DialogContent>
      <DialogActions>
        <Button disabled={ this.state.loading } raised color="primary" onClick={ () => this.closeModal() }>Close</Button>
      </DialogActions>
    </Dialog>
     </Scene>
    
   
  );
  }
}

const styles = theme => ({

  primaryText: {
    color: theme.palette.primaryText,
    fontSize: '12px',
  },
  contentText: {
    'text-align': 'center'
  }
});

export default withStyles(styles)(App);
