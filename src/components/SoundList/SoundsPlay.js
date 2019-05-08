import React, {Component, Fragment} from 'react';
import ReactHowler from 'react-howler';
import { connect } from 'react-redux';


class SoundsPlay extends Component {
  componentDidUpdate() {
    console.log('[SoundsPlay] updated!');
  }
  render() {
    const { playing, sounds } = this.props;
    return (
      <Fragment>
        {
          sounds.map((sound, idx) => {
            return (
            <ReactHowler
              key={idx}
              src={sound.href}
              playing={playing.sounds.includes(idx)}
              loop={true}
              mute={false}
              volume={playing.volumes[playing.sounds.indexOf(idx)] || 0.0}
            />)
          }
          )
        }
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    sounds: state.lofi.sounds,
    playing: state.lofi.playing
  }
}

export default connect(mapStateToProps)(SoundsPlay);