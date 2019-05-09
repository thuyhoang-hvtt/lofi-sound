export const signOut = () => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    try {
      let status = await firebase.auth().signOut();
      return dispatch({type: 'SIGNOUT_SUCCESS'});
    }
    catch {
      return dispatch({type: 'SIGNOUT_ERROR'});
    }
  }
}