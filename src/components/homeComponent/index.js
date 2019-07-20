import React, {Component} from 'react';
import {connect} from 'react-redux';
import {} from './style.css';
import SearchComponent from './../searchComponent';

class HomeComponent extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className = 'homeDiv'>
        <div className = 'landingDiv'>
          <SearchComponent />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{

  }
}

const mapDispatchToProps = (dispatch) => {
  return{

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
