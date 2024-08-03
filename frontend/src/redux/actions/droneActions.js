import axios from 'axios';

export const FETCH_DRONES_SUCCESS = 'FETCH_DRONES_SUCCESS';
export const FETCH_DRONE_DETAILS_SUCCESS = 'FETCH_DRONE_DETAILS_SUCCESS';

export const fetchDrones = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:4000/drones');
    dispatch({ type: FETCH_DRONES_SUCCESS, payload: response.data });
  } catch (error) {
    console.error('Error fetching drones:', error);
  }
};

export const fetchDroneDetails = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:4000/drones/${id}`);
    dispatch({ type: FETCH_DRONE_DETAILS_SUCCESS, payload: response.data });
  } catch (error) {
    console.error('Error fetching drone details:', error);
  }
};