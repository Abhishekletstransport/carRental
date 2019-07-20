import Actions from './../actions';

function carDetailsReducer( state = {}, action ) {
  switch (action.type) {
    case Actions.SET_CAR_DETAILS: {
      return Object.assign(
          {},
          state,
          {
            carDetails: action.carDetails,
          }
      );
    }
    default:
      return state;
  }
}

export default carDetailsReducer;
