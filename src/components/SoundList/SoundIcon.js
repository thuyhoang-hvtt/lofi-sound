import React, { Component, Fragment } from 'react';
import ReactHowler from 'react-howler';
import { Icon, Slider, Card } from 'antd';




const initialState = {
  playing: false,
  loop: true,
  mute: false,
  volume: 0.8
  
}

const activeStyle = {
  fontSize: '128px',
  opacity: '0.7',
  color: '#fff'
}

const disableStyle = {
  fontSize: '128px',
  color: '#fff'
}


class SoundIcon extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.playing !== nextProps.playing;
  }

  componentDidUpdate() {
    console.log('[SoundIcon] updated!');
  }

  render() {
    const { order, icon, playing, volume } = this.props;
    return (
      <Fragment >
        <Icon 
          style={playing ? activeStyle : disableStyle} 
          component={icon} 
          onClick={() => this.props.toggleSound({order, playing})}
        />
        {
          playing &&
          <Slider
            min={0}
            max={1.0}
            step={0.01}
            defaultValue={volume}
            onChange={value => this.props.changeVolume({order, value})}
            tooltipVisible={false}
          />
        }
      </Fragment>
    );
  }
}


export default SoundIcon;