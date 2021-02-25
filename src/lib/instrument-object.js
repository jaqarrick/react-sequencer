export default class InstrumentObject {
    constructor(instrument, beatsClicked, instrumentType, instrumentName, instrumentSettings){
      this.beatsClicked = beatsClicked
      this.instrument = instrument
      this.instrumentType = instrumentType
      this.instrumentName = instrumentName
      this.instrumentSettings = instrumentSettings
    }
  }