import { createStore, combineReducers } from 'redux';
import userReducer from "./reducers/userReducer";
import { setUserName } from "./actions/userActions";

const storedUsername = localStorage.getItem('username');

const initialState = {
  user: {
    username: storedUsername || '', 
  },
};

const rootReducer = combineReducers({
  user: userReducer,
});

const store = createStore(rootReducer, initialState);

if (storedUsername) {
  store.dispatch(setUserName(storedUsername));
}

export default store;
