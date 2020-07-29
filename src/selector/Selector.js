
import React from 'react';
import Clicker from './clicker/Clicker'
import './Selector.css'
import {RemoveInstrumentSwitch, InstrumentOptionsSwitch, InstrumentNameSwitch} from './switches/Switches'
import SelectorOptions from './SelectorOptions'







class Selector extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      hasClickedSelectorOptions: false
    }
  }

  toggleOptions = () => {
    this.setState({
      hasClickedSelectorOptions: !this.state.hasClickedSelectorOptions
    })
  }
  render(){
    return(
      <React.Fragment>
        <div className="Selector">
          <InstrumentNameSwitch instrumentName={this.props.instrumentName} />
          {this.props.beats.map(
          (beat, i) => 
            <Clicker 
              beat={beat} 
              selectorIndex={this.props.selectorIndex} 
              key={i}
              sendBeatsClicked={this.props.sendBeatsClicked}
              hasClicked={this.props.beatsClicked.includes(beat) === true ? true : false}
              />
          )}
          <InstrumentOptionsSwitch 
            onClickInstrumentOptions={this.toggleOptions}
            hasClickedSelectorOptions={this.state.hasClickedSelectorOptions}  />
          <RemoveInstrumentSwitch 
            selectorIndex={this.props.selectorIndex}
            onRemoveInstrumentClick={this.props.onRemoveInstrumentClick}
          />
        </div>
        <SelectorOptions 
          selectorIndex={this.props.selectorIndex}
          updateInstrumentSettings={this.props.updateInstrumentSettings}
          notes={this.props.notes}
          noteSelected={this.props.noteSelected}
          instrumentType={this.props.instrumentType}
          className={
            this.state.hasClickedSelectorOptions 
            ? 
            "selector-options-container active"
            :
            "selector-options-container"
          } 
      />
      </React.Fragment>
      )
    }
  }

export default Selector
