import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import { App } from './App';


it('1 should equal 1', () =>{
  expect(1).toBe(1)
})