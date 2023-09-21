
export const SET_USER_NAME = 'SET_USER_NAME';

export const setUserName = (username) => {
  localStorage.setItem('username', username);

  return {
    type: SET_USER_NAME,
    payload: username,
  };
};
