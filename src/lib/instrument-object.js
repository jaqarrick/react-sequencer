import { Volume } from 'tone'

export default class InstrumentObject {
    constructor(instrument, beatsClicked, instrumentType, instrumentName, instrumentSettings, audioNodeToChain){
      this.beatsClicked = beatsClicked
      this.instrument = instrument
      this.instrumentType = instrumentType
      this.instrumentName = instrumentName
      this.instrumentSettings = instrumentSettings
      this.volumeNode = new Volume().connect(audioNodeToChain)
      this.instrument.connect(this.volumeNode)
    }
  }