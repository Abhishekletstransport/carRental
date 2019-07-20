import React, {Component} from 'react';
import {connect} from 'react-redux';
import {} from './style.css';
import SearchComponent from './../searchComponent/index.js';
import Utils from './../../utils/util.js';
import InfoCardComp from './../infoCardComp/index.js';
import FilterComponent from './../filterComponent/index.js';
import {withRouter} from 'react-router';

class CardDetailsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // filters: {
      //   transmission: {},
      //   car_Type: {},
      //   fuel_Type: {},
      // },
      transmissionFilter: [],
      carTypeFilter: [],
      fuelTypeFilter: [],
    }
  }

  handleFilter = (filters) => {
    let transmissionFilter = [];
    let fuelTypeFilter = [];
    let carTypeFilter = [];
    Object.keys(filters).forEach((id,index) => {
      Object.keys(filters[id] || {}).forEach((key,index) => {
        if(filters[id][key]){
          if(id === 'transmission'){
            transmissionFilter.push(key);
          }
          if(id === 'car_Type'){
            carTypeFilter.push(key);
          }
          if(id === 'fuel_Type'){
            fuelTypeFilter.push(key);
          }
        }
      })
    })
    this.setState({
      filters,
      transmissionFilter,
      fuelTypeFilter,
      carTypeFilter,
    });
  }

  reduceFunction = (object,value) => {
    console.log("---object--",object,value)
    return object[value] = true;
  }

  allowCard = (detail) => {
    const{
      fuel_Type,
      car_Type,
      transmission,
    } = detail;
    const {
      transmissionFilter,
      fuelTypeFilter,
      carTypeFilter,
    } = this.state;

    const ans = ['hi', 'hello'].reduce((acc, curr) => (acc[curr] = true))
    console.log("--ans---",ans);

    return (transmissionFilter.length  ? transmissionFilter.filter(val => val === transmission).length: true) &&
    (fuelTypeFilter.length  ? fuelTypeFilter.filter(val => val === fuel_Type).length: true) &&
    (carTypeFilter.length  ? carTypeFilter.filter(val => val === car_Type).length: true)

    // let transmissionAllow = true;
    // let fuelTypeAllow = true;
    // let carTypeAllow = true;
    // let allow = true;
    // if(transmissionFilter.length){
    //
    //   transmissionAllow = contain;
    // }
    // if(fuelTypeFilter.length){
    //   let contain = false;
    //   fuelTypeFilter.forEach((fuel) => {
    //     if(fuel === fuel_Type){
    //       contain = true;
    //     }
    //   })
    //   fuelTypeAllow = contain;
    // }
    // if(carTypeFilter.length){
    //   let contain = false;
    //   carTypeFilter.forEach((car) => {
    //     if(car === car_Type){
    //       contain = true;
    //     }
    //   })
    //   carTypeAllow = contain;
    // }
    // return transmissionAllow && fuelTypeAllow && carTypeAllow;
  }

  render(){
    const{
      carDetails
    } = this.props;
    const{
      filters,
      transmissionFilter: [],
      carTypeFilter: [],
      fuelTypeFilter: [],
    } = this.state;
    let displayHtml = null;

    if(!Utils.isUndefined(carDetails)){
      displayHtml = (
        <div className = 'displayAllDiv'>
          {
           carDetails.map((detail, index) => {
             const{
               fuel_Type,
               car_Type,
               transmission,
             } = detail;
             if(this.allowCard(detail)){
               return(
                 <InfoCardComp data = {detail} key = {index}/>
               )
             }
           })
          }
        </div>
      )
    }
    return(
      <div className = 'carDetailsDiv'>
        <div className = 'searchBox'>
          <SearchComponent />
        </div>
        <FilterComponent onFilter = {(filter) => this.handleFilter(filter)}/>
        {
          displayHtml
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    carDetails: state.carDetailsReducer.carDetails,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CardDetailsComponent));
