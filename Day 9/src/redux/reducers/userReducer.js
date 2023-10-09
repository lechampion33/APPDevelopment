const initialState = {
  username: '',
  email: '',
  country: '',
  description: '',
  amount: '',
  loanTerm: 'short-term',
  category: '',
  verified: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_NAME':
      return {
        ...state,
        username: action.payload,
      };
    case 'UPDATE_FORM_DATA':
      return {
        ...state,
        ...action.payload, 
      };
    default:
      return state;
  }
};

export default userReducer;
