import AppData from './appData.js';
/**
 * Util contains utility methods not involving major logic application
 */
class Util {
  /**
   * constructor initialises class
   */
  constructor() {
  }

  /**
   * isUndefined checks if input string is undefined or empty
   * @param  {String}  str input string
   * @return {Boolean} returns true if str is not undefined or empty
   */
  isUndefined(str) {
    if (typeof str === 'undefined' ||
      str === null || str === 'undefined' || str === 'null') {
      return true;
    }
    return false;
  }

  getWeekOfDay(timeStamp) {
    const dayNumber = (new Date(Number(timeStamp))).getDay();
    return dayNumber;
  }


}

export default new Util();
