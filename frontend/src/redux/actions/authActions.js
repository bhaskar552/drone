import axios from 'axios';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

export const login = (username, password, navigate) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:4000/login', { username, password });
    dispatch({ type: LOGIN_SUCCESS, payload: response.data.user });
    navigate('/drones');
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error.message });
    throw error; // Re-throw error to handle in component
  }
};

export const logout = () => ({
  type: LOGOUT,
});
