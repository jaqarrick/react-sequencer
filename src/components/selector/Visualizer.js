import React from 'react';
import './Visualizer.css';
import './Selector.css'
import {SwitchGap} from './switches/Switches'

class Visualizer extends React.Component {
    render(){

      const {counter, beats} = this.props
      return(
        <div className="Visualizer">
          <SwitchGap />
          {beats.map(
            (beat, i) => 
              <div className={counter === beat ? "light active" : "light"} key={i} />
          )}
          <SwitchGap />
          <SwitchGap />
        </div>

       
      )
    }
  }
  
  export default Visualizer