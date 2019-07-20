import Actions from './index.js';
/**
 * LoaderActions shows Loader on screen
 *
 */
class LoaderActions {
  /**
   * showLoader to show loader
   * @return {Object} action object
   */
  showLoader() {
    return {
      type: Actions.SHOW_LOADER,
    };
  }
  /**
   * hideLoader to hide loader
   * @return {Object} action object
   */
  hideLoader() {
    return {
      type: Actions.HIDE_LOADER,
    };
  }
}

export default new LoaderActions();
