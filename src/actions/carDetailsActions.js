import Actions from './index.js';
import CarDetailsService from './../services/carDetailsService.js';
import ErrorActions from './errorActions';
import AppData from './../utils/appData';


class CarDetailsActions {

  getMultiCarDetails(payload, options) {
    return (dispatch) => (
      CarDetailsService.fetchCarDetails(payload, options)
          .then((carDetails) => {
            dispatch(this.setCarDetails(carDetails));
          }).catch((err) => {
            dispatch(ErrorActions.showError('errorFetchingData'));
          })
    );
  }


  setCarDetails(carDetails) {
    return {
      type: Actions.SET_CAR_DETAILS,
      carDetails,
    };
  }

}

export default new CarDetailsActions();
