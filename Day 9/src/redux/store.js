import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import { setEmail } from './actions/userActions'; // Import the new action

const storedEmail = localStorage.getItem('email'); // Change variable name

const initialState = {
  user: {
    email: storedEmail || '', // Change field name
  },
  formData: {
    username: '', // Keep the field name as 'username'
    email: '',    // Keep the field name as 'email'
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

if (storedEmail) {
  store.dispatch(setEmail(storedEmail)); // Change action to setEmail
}

export default store;
