import React, {Component} from 'react';
import './Switches.css'

class InstrumentNameSwitch extends Component {
    render(){
        return(
            <div className="switch instrumentNameSwitch">{this.props.instrumentName}</div>
        )
    }
}
class SwitchGap extends Component {
    render(){
        return(
            <div onClick={()=>console.log("remove")}className="switch">
            </div>
        )
    }  
}


class InstrumentOptionsSwitch extends Component {
    
    render(){
        return(
            <div 
                onClick={this.props.onClickInstrumentOptions}
                className={this.props.hasClickedSelectorOptions ?
                    "switch instrumentsOptionsSwitch active"
                    :
                    "switch instrumentsOptionsSwitch"
                }>
                <div>&#9776;</div>       
            </div>
        )
    }
}
class RemoveInstrumentSwitch extends Component {
    
    removeInstrument = () => {
        this.props.onRemoveInstrumentClick(this.props.selectorIndex)
    }
    render(){
        return(
            <div onClick={this.removeInstrument}className="switch removeInstrumentSwitch">
                &#10005;
            </div>
        )
    }
}

export {InstrumentOptionsSwitch, RemoveInstrumentSwitch, SwitchGap, InstrumentNameSwitch}
