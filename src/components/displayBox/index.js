import React,{Component, Fragment} from 'react';
import {} from './style.css';
class DisplayBox extends Component {
  render(){
    const{
      label,
      value
    } = this.props;
    return(
      <div className = 'sideDiv'>
        <div className = 'labelDiv'>
          {label}
        </div>
        <div className = 'valueDiv'>
          {value}
        </div>
      </div>
    )
  }
}

export default DisplayBox;
