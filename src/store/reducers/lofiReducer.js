import _ from 'lodash';
import { combineReducers } from 'redux';

import { icons } from '../../assets/icons/icons';
import { sounds } from '../../assets/sounds/sounds';


// Mock Data

const initState = {
  playing: {
    sounds: [],
    volumes: []
  },
  combos: [
    {
      id: 0,
      name: 'By A Stream',
      sounds: [0, 3, 4]
    }
  ],
  todos: [
    {
      id: 1,
      work: 'Push-up 100 times'
    }
  ],
  sounds: _.toArray(sounds),
  icons: icons
}


const lofiReducer = (state = initState, action) => {
  switch (action.type) {
    case 'TOGGLE_SOUND': {
      const { playing, order } = action.sound;
      let { sounds, volumes } = state.playing;
      if (playing) {
        const idx = sounds.indexOf(order);
        sounds.splice(idx, 1);
        volumes.splice(idx, 1);
      }
      else {
        sounds.push(order);
        volumes.push(0.8)
      }
      return Object.assign({}, state, {
        playing: {
          sounds,
          volumes
        }
      })
    }
    case 'CHANGE_VOLUME': {
      const { value, order } = action.sound;
      let { sounds, volumes } = state.playing;
      const idx = sounds.indexOf(order);
      volumes[idx] = value;
      return Object.assign({}, state, {
        playing: {
          sounds,
          volumes
        }
      })
    }
    default:
      return state;
  }
  
}

export default lofiReducer;