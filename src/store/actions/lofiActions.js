

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