
export const SET_USER_NAME = 'SET_USER_NAME';

export const setUserName = (username) => {
  localStorage.setItem('username', username);

  return {
    type: SET_USER_NAME,
    payload: username,
  };
};

export const UPDATE_FORM_DATA = 'UPDATE_FORM_DATA';

export const updateFormData = (formData) => ({
  type: UPDATE_FORM_DATA,
  payload: formData,
});
export const CLEAR_FORM_DATA = 'CLEAR_FORM_DATA';

export function clearFormData() {
  return {
    type: CLEAR_FORM_DATA,
  };
}