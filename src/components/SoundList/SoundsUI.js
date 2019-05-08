import React, { Component, Fragment } from 'react';
import { Row, Col, Button, Statistic, Input } from 'antd';
import SoundIcon from './SoundIcon';

import { connect } from 'react-redux';
import { toggleSound, changeVolume, setTimer, addCombo, toggleCombo } from '../../store/actions/lofiActions';

const activeStyle = {
  fontSize: '128px',
  opacity: '0.7',
  color: '#fff'
}

const disableStyle = {
  fontSize: '128px',
  color: '#fff'
}

const controlBtnStyle = {
  width: 350,
  height: 54,
  borderColor: 'rgba(242,242,242,0.4)',
  borderWidth: 0,
  backgroundColor: 'rgba(242,242,242,0.2)',
  color: '#fff',
  fontSize: 20
}

const inputStyle = {
  width: '350px',
  height: '54px',
  backgroundColor: 'inherit',
  borderColor: 'rgba(242,242,242,0.4)',
  borderWidth: 3,
  borderRadius: '32px',
  color: '#fff',
  textAlign: 'center',
  fontSize: 20
}


class SoundsUI extends Component {
  state = {
    saving: false,
  }

  toggleSaving = () => {
    const { saving } = this.state;
    this.setState({ saving: !saving })
  }

  addCombo = e => {
    const { sounds } = this.props.playing;
    const title = e.target.value;
    this.props.addCombo({ title, sounds });
    this.props.toggleCombo(this.props.combos.length - 1)
    this.setState({
      saving: false
    })
  }

  render() {
    const { playing, icons, timer } = this.props;
    const { saving } = this.state;
    return (
      <Fragment>
      <Row type="flex" justify="center" style={{ marginBottom: 64 }}>
        { 
          playing.title 
          ?
          <Col span={8}>
            <Button 
              style={{...controlBtnStyle, backgroundColor: 'inherit', borderWidth: 3 }} 
              shape="round"
              onClick={() => this.props.toggleCombo(playing.combo)}
            >
              {playing.title}
            </Button>
          </Col>
          :
          (
            playing.sounds.length < 2 
            ? 
            <Col span={8}>
              <Button style={controlBtnStyle} shape="round">Favourites</Button>
            </Col>
            :
            (
              !saving
              ?
              <Fragment>
                <Col span={4}>
                  <Button 
                    style={{...controlBtnStyle, width: 170}} 
                    shape="round"
                    onClick={this.toggleSaving.bind(this)}
                  >Save</Button>
                </Col>
                <Col span={4}>
                  <Button style={{...controlBtnStyle, width: 170}} shape="round">Share</Button>
                </Col>
              </Fragment>
              :
              <Col span={8}>
                <Input 
                  autoFocus 
                  style={inputStyle} 
                  onPressEnter={this.addCombo.bind(this)} 
                  onBlur={this.toggleSaving.bind(this)}
                />
              </Col>
            )
          )
        }
        {
          timer.isCounting 
          ?
          <Fragment>
            <Col span={6}>
            <Button style={{...controlBtnStyle, backgroundColor: 'inherit', width: 200, borderWidth: 3 }} shape="round">
              <Statistic.Countdown 
                value={timer.deadline}
                onFinish={() => this.props.setTimer({ isCounting: false})}
              />
            </Button>
            </Col>
            <Col span={2}>
              <Button 
                style={{...controlBtnStyle, width: 100}} 
                shape="round"
                onClick={() => this.props.setTimer({ isCounting: false })}
              >Stop</Button>
            </Col>
          </Fragment>
          :
          <Col span={8}>
            <Button style={controlBtnStyle} shape="round">Timer</Button>
          </Col>
        }
      </Row>
      
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
                toggleSound={this.props.toggleSound}
                changeVolume={this.props.changeVolume}
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
                  toggleSound={this.props.toggleSound}
                  changeVolume={this.props.changeVolume}
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
    icons: state.lofi.icons,
    timer: state.lofi.timer,
    combos: state.lofi.combos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleSound: sound => dispatch(toggleSound(sound)),
    changeVolume: sound => dispatch(changeVolume(sound)),
    setTimer: (timer) => dispatch(setTimer(timer)), 
    addCombo: combo => dispatch(addCombo(combo)),
    toggleCombo: combo => dispatch(toggleCombo(combo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SoundsUI);