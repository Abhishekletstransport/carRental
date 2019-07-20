import store from './../store';
import LoaderActions from './../actions/loaderActions';
import AppData from './../utils/appData';

/**
 * FetchHelper containes helper methods for Api Calls GET, PUT, POST and DELETE,
 * and API Call methods
 */
class FetchHelper {
  /**
   * get GET API Call to url after validating token for all get requests
   * @param  {String} url URL to be hit
   * @param  {Object} options consists of token and other user details
   * passed via JSBridge
   * @return {Promise} returns new Promise function
   */
  get({url, options = {}, headers = {}}) {
    const {
      showLoader = true,
    } = options;
    const promiseFunc = ( resolve, reject ) => {
      if (showLoader) {
        store.dispatch(LoaderActions.showLoader());
      }
      const headers = {};
      fetch(url, {
        headers: headers,
      })
          .then(this.checkStatus)
          .then(this.parseJSON)
          .then(( res ) => {
            if (showLoader) {
              store.dispatch(LoaderActions.hideLoader());
            }
            resolve(res);
          })
          .catch((ex) => {
            if (showLoader) {
              store.dispatch(LoaderActions.hideLoader());
            }
            reject(ex);
          });
    };
    return new Promise(promiseFunc);
  }

  /**
   * checkStatus checks status of response object from api call
   * @param  {Object} response response recieved from api call
   * @return {Object} returns response object or error
   */
  checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      const error = new Error(response);
      error.response = response;
      throw error;
    }
  }

  /**
   * parseJSON returns json format of response Object
   * @param  {Object} response response recieved from api call
   * @return {JSON} json format of response Object
   */
  parseJSON(response) {
    return response.json();
  }
}

export default new FetchHelper();
