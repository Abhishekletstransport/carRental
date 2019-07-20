import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {} from './style.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CarDetailsActions from './../../actions/carDetailsActions.js';
import {withRouter} from 'react-router-dom';
import {URLS} from './../../routes/index.js';
import Utils from './../../utils/util.js';

class SearchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      location: undefined,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    this.props.getMultiCarDetails();

    const{
      match,
    } = this.props;
    const{
      location,
      startTime,
    } = match.params;
    if(!Utils.isUndefined(location) && !Utils.isUndefined(startTime)){
      this.setState({
        location,
        startDate: new Date(Number(startTime)),
      })
    }
  }

  findUrl = () => {
    const {
      location,
      startDate,
    } = this.state;
    const url = URLS.CAR_DETAILS
      .replace(/:location/, location)
      .replace(/:startTime/, startDate.getTime())
    return url;
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  handleLangChange = (e) => {
    this.setState({
      location: e.target.value
    })
  }

  handleSubmit = () => {
    const{
      location,
      startDate,
    } = this.state;;
    if(!Utils.isUndefined(location) &&
    !Utils.isUndefined(startDate)){
      const url = this.findUrl();
      this.props.history.push(url);
    }
    this.props.getMultiCarDetails();
  }

  render(){

    return(
      <Fragment>
        <div className = 'inputDiv'>
          <label className = 'locationLabel'>
            Location
          </label>
          <input
            type = 'text'
            className = 'locationInput'
            value = {this.state.location}
            onChange = {this.handleLangChange}>
          </input>
        </div>
        <div className = 'inputDiv'>
          <label className = 'startLabel'>
            StartDate
          </label>
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
          />
        </div>

        <div className = 'submitBtn' onClick = {this.handleSubmit}>
          <div className = 'submitLink'>
            Submit
          </div>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    carDetails: state.carDetailsReducer.carDetails
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    getMultiCarDetails: (payload) => (
      dispatch(CarDetailsActions.getMultiCarDetails(payload))
    ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchComponent));
