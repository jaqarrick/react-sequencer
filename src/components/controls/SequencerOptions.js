import React from 'react';
import './Controls.css';
import OptionsSlider from './OptionsSlider'




class SequencerOptions extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            selectedOption: null
        }
    }
    
    handleChange = selectedOption => {
        this.setState({selectedOption})
        this.props.onChangeBeatDivision(selectedOption.value)
        this.props.toggleOptions()
    }
  
    handleTempoChange = e => {
       let value = e.target.value
       this.props.handleTempoChange(value)
    }

    valuetext = value => {
        return `${value}°C`;
    }

    updateBeatDivision = (event, value) => {
        let newBeatDivision = value
        this.props.onChangeBeatDivision(newBeatDivision)
    }

    updateTempo = (event, value) => {
        let newTempo = value
        this.props.onChangeTempo(newTempo)
    }

    updateVolume = (event, value) => {
        let newVolume
        if(value < 10){
            newVolume = -100
        } else {
            newVolume = value/3 - 30
        }
        console.log(newVolume)

        this.props.onChangeVolume(newVolume)
    }

    render() {
        return(
        <div className={this.props.className}>
            <div className="sequencer-options">
                <div className="options">
                    <span className="text"> beats
                    </span>
                    <OptionsSlider
                        defaultValue={16}
                        getAriaValueText={this.valuetext}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        step={1}
                        min={2}
                        max={16}
                        onChange={this.updateBeatDivision}
                    />
                </div>
                <div className="options">
                    <span className="text"> tempo/bpm
                    </span>
                    <OptionsSlider
                        defaultValue={120}
                        getAriaValueText={this.valuetext}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        min={40}
                        max={260}
                        onChange={this.updateTempo}
                    />
                </div>
                <div className="options">
                    <span className="text"> volume
                    </span>
                    <OptionsSlider
                        defaultValue={90}
                        getAriaValueText={this.valuetext}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        min={0}
                        max={100}
                        onChange={this.updateVolume}
                    />
                </div>
            </div>
        </div>
        )
    }
}

export default SequencerOptions
