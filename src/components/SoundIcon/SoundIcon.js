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
  state = initialState;

  _clickHandler = () => {
    const { playing } = this.state;
    this.setState({ playing: !playing })
  }

  _onChange = (value) => {
    this.setState({ volume: value });
  }

  render() {
    const { playing, loop, mute, volume } = this.state;
    const { src, icon } = this.props;
    return (
      <Fragment >
        <ReactHowler
          src={src}
          playing={playing}
          loop={loop}
          mute={mute}
          volume={volume}
        />
        <Icon 
          style={playing ? activeStyle : disableStyle} 
          component={icon} 
          onClick={this._clickHandler}
        />
        {
          playing &&
          <Slider
            min={0}
            max={1.0}
            step={0.01}
            defaultValue={volume}
            onChange={this._onChange}
            tooltipVisible={false}
          />
        }
      </Fragment>
    );
  }
}

export default SoundIcon;