import React, {Component, Fragment} from 'react';
import {} from './style.css';
import {connect} from 'react-redux';

/**
 * LoaderComponent shows loader on full screen
 * @extends Component
 */
class LoaderComponent extends Component {
  /**
   * render LoaderComponent
   * @return {JSX}
   */
  render() {
    const {
      loaderCount,
      showError,
    } = this.props;
    let loaderHtml = null;
    if (loaderCount && !showError) {
      loaderHtml = (
        <div className = 'loaderComponentDiv'>
          <div className= 'imageLoaderMain'>
            <svg width="35" height="35">
              <g>
                <circle
                  cx="20"
                  cy="20"
                  r="9"
                  className= 'imageLoader'
                />
              </g>
            </svg>
          </div>
        </div>
      );
    }
    return (
      <Fragment>
        {loaderHtml}
      </ Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loaderCount: state.applicationReducer.loaderCount || 0,
    showError: state.applicationReducer.showError,
  };
};
export default connect(mapStateToProps)(LoaderComponent);
