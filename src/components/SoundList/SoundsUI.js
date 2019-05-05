import React, { Component, Fragment } from 'react';
import { Row, Col } from 'antd';
import SoundIcon from './SoundIcon';

import { connect } from 'react-redux';
import { toggleSound, changeVolume } from '../../store/actions/lofiActions';

const activeStyle = {
  fontSize: '128px',
  opacity: '0.7',
  color: '#fff'
}

const disableStyle = {
  fontSize: '128px',
  color: '#fff'
}


class SoundsUI extends Component {

  render() {
    const { playing, icons, toggleSound, changeVolume } = this.props;
    console.log(playing);
    return (
      <Fragment>
      {
        [...Array(Math.ceil(icons.length / 2)).keys()].map( row => (
          <Row 
            key={row} 
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
                order={2*row} 
                playing={playing.sounds.includes(2*row)}
                volume={playing.volumes[playing.sounds.indexOf(2*row)] || 0.0}
                icon={icons[2*row]} 
                toggleSound={toggleSound}
                changeVolume={changeVolume}
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
              { 
                (2*row + 1 !== icons.length) 
                && 
                <SoundIcon
                  order={2*row + 1} 
                  icon={icons[2*row + 1]} 
                  playing={playing.sounds.includes(2*row + 1)}
                  volume={playing.volumes[playing.sounds.indexOf(2*row + 1)] || 0.0}
                  toggleSound={toggleSound}
                  changeVolume={changeVolume}
                />
              }
            </Col>
          </Row>
        ))
      }
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    playing: state.lofi.playing,
    icons: state.lofi.icons
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleSound: sound => dispatch(toggleSound(sound)),
    changeVolume: sound => dispatch(changeVolume(sound))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SoundsUI);