import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import { updateFormData, setUserName } from './actions/userActions'; // Import the new action

const storedUsername = localStorage.getItem('username');

const initialState = {
  user: {
    username: storedUsername || '',
  },
  formData: {
    username: '',
    email: '',
    country: '',
    description: '',
    amount: '',
    loanTerm: 'short-term',
    category: '',
    verified: false,
  },
};

const store = configureStore({
  reducer: {
    user: userReducer,
    formData: (state = initialState.formData, action) => {
      switch (action.type) {
        case 'UPDATE_FORM_DATA':
          return {
            ...state,
            ...action.payload,
          };
        default:
          return state;
      }
    },
  },
  preloadedState: initialState,
});

if (storedUsername) {
  store.dispatch(setUserName(storedUsername));
}

export default store;
