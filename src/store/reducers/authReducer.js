const initState = {}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SIGNOUT_SUCCESS': {
      console.log('SignOut successfull!');
      return state;
    }
    default: 
      return state;
  }
}

export default authReducer;