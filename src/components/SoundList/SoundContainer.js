import React, { Component, Fragment } from 'react';
import { Row, Col } from 'antd';
import SoundIcon from './SoundIcon';
import _ from 'lodash';

// Mock data


import { icons } from '../Materials/icons';
import { sounds } from '../Materials/sounds';
// This container will request information about sounds

const initialState = {
  playStatus: [...Array(11).keys()].map(val => val = false),
  icons: icons,
  sounds: _.toArray(sounds)
}

class SoundContainer extends Component {
  state = initialState;

  _toggleSoundClickHandler = e => {
    console.log(e);
  }

  render() {
    const { sounds, icons } = this.state;
    console.log([...Array(Math.ceil(sounds.length / 2)).keys()]);
    return (
      <Fragment>
      {
        [...Array(Math.ceil(sounds.length / 2)).keys()].map( index => (
          <Row 
            key={index} 
            type="flex" 
            justify="center"
          >
            <Col 
              span={4} 
              style={
                { 
                  textAlign: 'center', 
                  margin: '24px 0',
                  minHeight: '200px'
                }
              }
            >
              <SoundIcon 
                playing 
                volume 
                icon={icons[2*index]} 
                src={sounds[2*index].href}
              />
            </Col>
            <Col span={4}></Col>
            <Col 
              span={4}
              style={
                { 
                  textAlign: 'center', 
                  margin: '24px 0',
                  minHeight: '200px'
                }
              }
            >
              {2*index + 1 !== sounds.length && <SoundIcon icon={icons[2*index + 1]} src={sounds[2*index + 1].href}/>}
            </Col>
          </Row>
        ))
      }
      </Fragment>
    );
  }
}

export default SoundContainer;