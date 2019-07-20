import React, {Component} from 'react';
import DisplayBox from './../displayBox/index.js';
import Utils from './../../utils/util.js';
import AppData from './../../utils/appData.js';
import {} from './style.css';
import {withRouter} from 'react-router';

class InfoCardComp extends Component {
  constructor(props){
    super(props);
    this.state = {
      location: undefined,
      startTime: undefined,
      selected: false,
    }
  }
  componentWillReceiveProps(next){
    this.setStateData(next);
  }
  setStateData = (props) => {
    const{
      match = {},
    } = props;
    const{
      location,
      startTime,
    } = match.params;
    this.setState({
      location,
      startTime,
    })
  }
  componentWillMount(){
    this.setStateData(this.props);
  }
  findImage = (image) => {
    if(Utils.isUndefined(image))
      return null;
    return(
      <div className = 'photoDiv'>
        <img src = {image} className = 'imgCar'/>
      </div>
    )
  }

  displayField = (label, value) => {
    if(Utils.isUndefined(value))
      return null;
    return(
      <DisplayBox label = {label} value = {value}/>
    )
  }

  findAvailability = (availability = '') => {
    const{
      startTime,
    } = this.state;
    const weekNumber = Utils.getWeekOfDay(startTime);
    const weekDay = AppData.WEEK_DAY_MAPPING[weekNumber];
    return availability.includes(weekDay)
  }

  handleBtnClick = () => {
    this.setState({
      selected: !this.state.selected
    })
  }
  render(){
    const{
      availability,
      car_Type,
      fuel_Type ,
      location,
      name,
      photo,
      price,
      seats,
      transmission,
    } = this.props.data;
    const disable = location.toLowerCase() !== this.state.location.toLowerCase() ? 'disable': '';
    const checkAvailability = this.findAvailability(availability);
    const status  = this.state.selected ? 'booked': '';
    const availableBtn = (
      <div className = 'availableBtn'  onClick = {this.handleBtnClick}>
        Book
      </div>
    )
    const notAvailableBtn = (
      <div className = 'notAvailableBtn'> Not Available</div>
    )

    return(
      <div className = {`infoDiv ${status} ${disable}`}>
        {this.findImage(photo)}
        <div className = 'containerDiv'>
          <div className = 'leftContainer'>
            {this.displayField('Price',price)}
            {this.displayField('Name',name)}
            {this.displayField('Location',location)}
            {this.displayField('carType',car_Type)}
          </div>
          <div className = 'rightContainer'>
            {this.displayField('Seats',seats)}
            {this.displayField('Fuel Type',fuel_Type)}
            {this.displayField('Transmission',transmission)}
          </div>
        </div>
        <div className = 'availabilityBtn'>
          {
            checkAvailability ? availableBtn: notAvailableBtn
          }
        </div>
      </div>
    )
  }
}

export default withRouter(InfoCardComp);
