const initialState = {
  authError: null
};

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'LOGIN_ERROR':
      console.log('login failed')
      return {
        ...state,
        authError: 'Login failed'
      }
    case 'LOGIN_SUCCESS':
      console.log('login success');
      return {
        ...state,
        authError: null,
      }
    case 'SIGNOUT_SUCCESS':
     console.log('signout success')
    default:
      return state
  }
}

export default authReducer;