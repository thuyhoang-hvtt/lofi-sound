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
      title: 'By A Stream',
      sounds: [0, 3, 4],
      picked: false
    }
  ],
  timer: {
    isCounting: false,
    initial: 0,
    deadline: 0
  },
  todos: [],
  sounds: _.toArray(sounds),
  icons: icons
}


const lofiReducer = (state = initState, action) => {
  switch (action.type) {
    case 'TOGGLE_SOUND': {
      const { playing, order } = action.sound;
      let { title, sounds, volumes } = state.playing;
      let { combos } = state;
      if (title) combos.map(combo => combo.picked = false);
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
        },
        combos: [...combos]
      })
    }
    case 'CHANGE_VOLUME': {
      const { value, order } = action.sound;
      let { title, combo, sounds, volumes } = state.playing;
      const idx = sounds.indexOf(order);
      volumes[idx] = value;
      return Object.assign({}, state, {
        playing: {
          title,
          combo,
          sounds,
          volumes
        }
      })
    }
    case 'SET_TIMER':{
      const { isCounting, deadline = 0 } = action.timer;
      const initial = Date.now()
      return Object.assign({}, state, {
        timer: {
          isCounting,
          initial,
          deadline
        }
      })
    }
    case 'ADD_TODO': {
      let { todos } = state;
      todos.push(action.todo);
      return Object.assign({}, state, {
        todos: [...todos]
      })
    }
    case 'REMOVE_TODO': {
      let { todos } = state;
      todos.splice(action.todo, 1);
      return Object.assign({}, state, {
        todos: [...todos]
      })
    }
    case 'ADD_COMBO': {
      // action.combo is a object contains 2 field: title & sounds.
      let { combos } = state;
      const { title, sounds } = action.combo;
      combos.push({ title, sounds, picked: false });
      return Object.assign({}, state, {
        combos: [...combos]
      })
    }
    case 'TOGGLE_COMBO': {
      // action.combo is index of combo will be played.
      let { combos } = state;
      

      let combo = {...combos[action.combo]};

      combos.map(combo => combo.picked = false);
      
      combos[action.combo].picked = !combo.picked;
      
      // !combo.picked is status at the moment
      let sounds = !combo.picked ? [...combo.sounds] : [];
      let volumes = [];
      sounds.map((sound, id) => volumes[id] = 0.8);

      return Object.assign({}, state, {
        playing: {
          title: sounds.length > 0 ? combo.title : null,
          combo: sounds.length > 0 ? action.combo : null,
          sounds: sounds,
          volumes: volumes
        },
        combos: [...combos]
      })
    }
    default:
      return state;
  }
  
}

export default lofiReducer;