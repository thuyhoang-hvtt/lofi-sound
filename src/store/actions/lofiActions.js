export const changeContent = (content) => {
  return (dispatch, getState) => {
    // Async code
    dispatch({ type: 'CHANGE_CONTENT', content: content });
  }
}

export const toggleSound = (sound) => {
  return (dispatch, getState) => {
    dispatch({ type: 'TOGGLE_SOUND', sound})
  }
}

export const changeVolume = sound => {
  return (dispatch, getState) => {
    dispatch({ type: 'CHANGE_VOLUME', sound })
  }
}

export const setTimer = timer => {
  return (dispatch, getState) => {
    dispatch({ type: 'SET_TIMER', timer })
  }
}

export const addTodo = todo => {
  return (dispatch, getState) => {
    dispatch({ type: 'ADD_TODO', todo })
  }
}

export const removeTodo = todo => {
  return (dispatch, getState) => {
    dispatch({ type: 'REMOVE_TODO', todo })
  }
}

export const restoreTodo = todo => {
  return (dispatch, getState) => {
    dispatch({ type: 'RESTORE_TODO', todo })
  }
}

export const addCombo = combo => {
  return (dispatch, getState) => {
    dispatch({ type: 'ADD_COMBO', combo })
  }
}

export const removeCombo = combo => {
  return (dispatch, getState) => {
    dispatch({ type: 'REMOVE_COMBO', combo })
  }
}

export const toggleCombo = combo => {
  return (dispatch, getState) => {
    dispatch({ type: 'TOGGLE_COMBO', combo })
  }
}