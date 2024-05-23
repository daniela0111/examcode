import { combineReducers } from 'redux';

interface SignUpState {
  email: string;
  password: string;
  licensePlate: string;
}

const initialState: SignUpState = {
  email: '',
  password: '',
  licensePlate: '',
};

const signUpReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SIGN_UP':
      return { ...state, ...action.payload }; // Update state with sign-up data
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  signUpForm: signUpReducer,
});

export default rootReducer;
