import { FETCH_DRONES_SUCCESS, FETCH_DRONE_DETAILS_SUCCESS } from '../actions/droneActions';

const initialState = {
  list: [],
  currentDrone: null,
};

const droneReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DRONES_SUCCESS:
      return {
        ...state,
        list: action.payload,
      };
    case FETCH_DRONE_DETAILS_SUCCESS:
      return {
        ...state,
        currentDrone: action.payload,
      };
    default:
      return state;
  }
};

export default droneReducer;