import Actions from './../actions';
import Utils from './../utils/util.js';

function applicationReducer( state = {}, action ) {
  switch (action.type) {
    case Actions.SHOW_LOADER: {
      let newLoaderCount = state.loaderCount;
      if (Utils.isUndefined(newLoaderCount)) {
        newLoaderCount = 0;
      }
      newLoaderCount++;
      return Object.assign(
          {},
          state,
          {
            loaderCount: newLoaderCount,
          }
      );
    }
    case Actions.HIDE_LOADER: {
      let newLoaderCount = state.loaderCount;
      newLoaderCount--;
      return Object.assign(
          {},
          state,
          {
            loaderCount: newLoaderCount,
          }
      );
    }
    case Actions.SHOW_ERROR: {
      return Object.assign(
          {},
          state,
          {
            showError: true,
            message: action.message,
          }
      );
    }
    case Actions.CLOSE_ERROR: {
      return Object.assign(
          {},
          state,
          {
            showError: false,
            message: undefined,
          }
      );
    }
    default:
      return state;
  }
}

export default applicationReducer;
