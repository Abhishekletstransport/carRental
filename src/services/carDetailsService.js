import FetchHelper from './../helpers/fetchHelper';
import Apis from './../utils/apis';
import AppData from './../utils/appData';

class CarDetailsService {

  async fetchCarDetails(payload, options = {}) {
    const url = Apis.FETCH_CAR_DETAILS;
    const carDetails = await FetchHelper.get({
      url: url,
      options: {
        ...options,
      },
    });
    return carDetails;
  }
}

export default new CarDetailsService();
