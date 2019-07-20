import React , {Component} from 'react';
import {} from './style.css';

class FilterComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      transmissionTypes: ['Manual', 'Automatic'],
      carType: ['Hatchback', 'Sedan', 'SUV', 'Mini SUV'],
      Fuel: ['Petrol', 'Diesel'],
      selectedFilters: {
        transmission: {},
        car_Type: {},
        fuel_Type: {},
      }
    }
  }

  handleClick= (type, value) => {
    return () => {
      const selectedFilters= {...this.state.selectedFilters};
      selectedFilters[type][value] = !selectedFilters[type][value];
      if(!selectedFilters[type][value]){
        delete selectedFilters[type][value]
      }
      this.props.onFilter(selectedFilters);
      this.setState({
        selectedFilters
      })
    }
  }
  render(){
    const{
      transmissionTypes,
      carType,
      Fuel,
      selectedFilters,
    } = this.state;
    const transmissionTypesHtml = (
      <div className = 'containerFilterDiv'>
        <div className = 'title'>TransmissionTypes</div>
        <div className = 'options'>
          {
            transmissionTypes.map((type,index) => {
              const filtered = selectedFilters['transmission'][type] ? 'selectFilter': '';
              return(
                <div
                  className = {`textType ${filtered}`}
                  onClick = {this.handleClick('transmission',type)}
                  key = {index}>
                  {type}
                </div>
              )
            })
          }
        </div>
      </div>
    )
    const carTypesHtml = (
      <div className = 'containerFilterDiv'>
        <div className = 'title'>Car Types</div>
        <div className = 'options'>
          {
            carType.map((type) => {
              const filtered = selectedFilters['car_Type'][type] ? 'selectFilter': '';
              return(
                <div className = {`textType ${filtered}`} onClick = {this.handleClick('car_Type',type)}>
                  {type}
                </div>
              )
            })
          }
        </div>
      </div>
    )
    const fuelHtml = (
      <div className = 'containerFilterDiv'>
        <div className = 'title'>Fuel</div>
        <div className = 'options'>
          {
            Fuel.map((type) => {
              const filtered = selectedFilters['fuel_Type'][type] ? 'selectFilter': '';
              return(
                <div
                  className = {`textType ${filtered}`}
                  onClick = {this.handleClick('fuel_Type',type)}>
                  {type}
                </div>
              )
            })
          }
        </div>
      </div>
    )
    return(
      <div className = 'filterBox'>
        <div className = 'filterLabel'> Filters</div>
        <div className = 'allFilters'>
          {transmissionTypesHtml}
          {carTypesHtml}
          {fuelHtml}
        </div>
      </div>
    )
  }
}

export default FilterComponent;
