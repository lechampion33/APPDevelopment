
// Update the constant
export const SET_EMAIL = 'SET_EMAIL';

// Update the action creator
export const setEmail = (email) => {
  localStorage.setItem('email', email);

  return {
    type: SET_EMAIL,
    payload: email,
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