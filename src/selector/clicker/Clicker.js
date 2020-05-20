import React from 'react';
import './Clicker.css';

class Clicker extends React.Component {

  onClickerClick = () =>{
    let beatClicked = this.props.beat
    this.props.sendBeatsClicked(this.props.selectorIndex, beatClicked)
  }

  render(){
    return(
      <div 
        className={`clicker ${this.props.hasClicked ? "active" : ""}`} 
        onClick={this.onClickerClick}> </div>
    )
  }
}

export default Clicker