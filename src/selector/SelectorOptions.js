
import React from 'react';
import './Selector.css'
import styled from 'styled-components'
import OptionsSlider from './OptionsSlider'


class NoteSelector extends React.Component {
  
  sendNote = e => {
    let note = e.target.id

    this.props.updateInstrumentSettings("note", note, this.props.selectorIndex)
  }

  render(){
    return(
      <div className={this.props.className}>
        <span className="text"> note:</span>
      {this.props.notes.map((note, i)=>
        note === this.props.noteSelected ? 
        <div key={i} id={note} className="note active"> {note} </div> :
        <div key={i} id={note} onClick={this.sendNote} className="note"> {note} </div>
        )
      }
      </div>
    )
  }
}

class EffectsSelector extends React.Component {

  sendDelay = (event, value) => { 
    let selectorIndex = this.props.selectorIndex
    this.props.updateInstrumentSettings("delay", value, selectorIndex)
  }
  sendReverb = (event, value) => { 
    let selectorIndex = this.props.selectorIndex
    this.props.updateInstrumentSettings("reverb", value, selectorIndex)
  }



  render(){
    return(
      <div className={this.props.className}>
          <span className="text">delay:</span> 
          <OptionsSlider
            name="delay"
            defaultValue={0}
            getAriaValueText={this.valuetext}
            aria-labelledby="discrete-slider"
            min={0}
            max={100}
            onChange={this.sendDelay}
          />
          <span className="text">reverb:</span>
          <OptionsSlider 
            name="delay"
            defaultValue={0}
            getAriaValueText={this.valuetext}
            aria-labelledby="discrete-slider"
            min={0}
            max={100}
            onChange={this.sendReverb}
          />
      </div>


    )
  }
}



export default class SelectorOptions extends React.Component {

  
  hangleChange = (e) => {
    this.setState({value: e.target.value})
  }

  updateNote = (event, value) => {
    console.log(value)
  }

  render(){
    return(
      <div className={this.props.className}>
        {this.props.instrumentType === "melodic" ? 
          <NoteSelector 
            noteSelected={this.props.noteSelected}
            selectorIndex={this.props.selectorIndex}
            notes={this.props.notes}
            className="note-selector-container"
            updateInstrumentSettings={this.props.updateInstrumentSettings}
          /> 
          :
          null
        }
        <EffectsSelector 
          className="effects-options-container"
          selectorIndex={this.props.selectorIndex}
          updateInstrumentSettings={this.props.updateInstrumentSettings}
        />
      </div>
    )
  }
}
