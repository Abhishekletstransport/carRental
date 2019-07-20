import Actions from './index.js';

/**
 * ErrorActions handles all Actions related to errors on fetching
 * data failure into Partner App
 */
class ErrorActions {
  /**
   * showError displays error
   * @param {Object} message to be displayed
   * @return {Object} action Object
   */
  showError(message) {
    return {
      type: Actions.SHOW_ERROR,
      message,
    };
  }

  /**
   * closeError hides error
   * @return {Object} action object
   */
  closeError() {
    return {
      type: Actions.CLOSE_ERROR,
    };
  }
}

export default new ErrorActions();
