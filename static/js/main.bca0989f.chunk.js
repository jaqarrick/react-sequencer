(this["webpackJsonpreact-sequencer"]=this["webpackJsonpreact-sequencer"]||[]).push([[0],{27:function(e,t,n){},32:function(e,t,n){},44:function(e,t,n){e.exports=n(63)},49:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(8),s=n.n(a),r=n(23),o=n.n(r),i=(n(49),n(7)),l=n(10),c=n(0),u=n(1),m=n(3),p=n(2),h=(n(32),n(24)),d=n(75),v=Object(h.a)({root:{color:"whitesmoke",height:2,padding:"15px 0"},thumb:{height:14,width:14,backgroundColor:"#fff","&:hover":{boxShadow:"none"}},active:{},valueLabel:{left:"calc(-50% - 4px)",top:-22,"& *":{background:"transparent",color:"whitesmoke"}},track:{height:2},rail:{height:2,opacity:.5,backgroundColor:"purple"},mark:{backgroundColor:"#bfbfbf",height:8,width:1,marginTop:-3},markActive:{opacity:1,backgroundColor:"currentColor"}})(d.a),b=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.setState({selectedOption:e}),a.props.onChangeBeatDivision(e.value),a.props.toggleOptions()},a.handleTempoChange=function(e){var t=e.target.value;a.props.handleTempoChange(t)},a.valuetext=function(e){return"".concat(e,"\xb0C")},a.updateBeatDivision=function(e,t){var n=t;a.props.onChangeBeatDivision(n)},a.updateTempo=function(e,t){var n=t;a.props.onChangeTempo(n)},a.updateVolume=function(e,t){var n;n=t<10?-100:t/3-30,console.log(n),a.props.onChangeVolume(n)},a.state={selectedOption:null},a}return Object(u.a)(n,[{key:"render",value:function(){return s.a.createElement("div",{className:this.props.className},s.a.createElement("div",{className:"sequencer-options"},s.a.createElement("div",{className:"options"},s.a.createElement("span",{className:"text"}," beats"),s.a.createElement(v,{defaultValue:16,getAriaValueText:this.valuetext,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:1,min:2,max:16,onChange:this.updateBeatDivision})),s.a.createElement("div",{className:"options"},s.a.createElement("span",{className:"text"}," tempo/bpm"),s.a.createElement(v,{defaultValue:120,getAriaValueText:this.valuetext,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",min:40,max:260,onChange:this.updateTempo})),s.a.createElement("div",{className:"options"},s.a.createElement("span",{className:"text"}," volume"),s.a.createElement(v,{defaultValue:90,getAriaValueText:this.valuetext,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",min:0,max:100,onChange:this.updateVolume}))))}}]),n}(s.a.Component),g=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).addInstrument=function(){a.props.onAddInstrumentClick(a.props.instrumentName)},a.state={instrument:a.props.instrumentName},a}return Object(u.a)(n,[{key:"render",value:function(){return s.a.createElement("button",{className:"options",onClick:this.addInstrument},this.props.instrumentName)}}]),n}(s.a.Component),f=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:this.props.className},this.props.instrumentOptions.map((function(t,n){return s.a.createElement(g,{key:n,instrumentName:t,onAddInstrumentClick:e.props.onAddInstrumentClick})})))}}]),n}(s.a.Component),k=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).toggleInstrumentBox=function(){a.state.hasClickedSequencerOptions?a.setState({hasClickedInstrumentOptions:!a.state.hasClickedInstrumentOptions,hasClickedSequencerOptions:!1}):a.setState({hasClickedInstrumentOptions:!a.state.hasClickedInstrumentOptions})},a.toggleSequencerBox=function(){a.state.hasClickedInstrumentOptions?a.setState({hasClickedSequencerOptions:!a.state.hasClickedSequencerOptions,hasClickedInstrumentOptions:!1}):a.setState({hasClickedSequencerOptions:!a.state.hasClickedSequencerOptions})},a.state={instrumentOptions:["option1","option2","option3","option4"],hasClickedInstrumentOptions:!1,hasClickedSequencerOptions:!1},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("click",(function(t){var n=t.target.id;"svg"!==n&&"optionsButton"!==n&&!0===e.state.hasClickedOptions&&e.toggle()}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"Controls"},s.a.createElement("div",{className:"control-buttons"},s.a.createElement("button",{onClick:this.props.onStartStopLoopClick}," ",this.props.isPlaying?s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"whitesmoke",width:"24",height:"24",viewBox:"0 0 24 24"},s.a.createElement("path",{d:"M11 22h-4v-20h4v20zm6-20h-4v20h4v-20z"})):s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"whitesmoke",width:"24",height:"24",viewBox:"0 0 24 24"},s.a.createElement("path",{d:"M3 22v-20l18 10-18 10z"}))),s.a.createElement("button",{id:"optionsButton",onClick:this.toggleInstrumentBox},this.state.hasClickedInstrumentOptions?s.a.createElement("div",null,"\u2014"):s.a.createElement("svg",{id:"svg",width:"24",fill:"whitesmoke",height:"24",xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd"},s.a.createElement("path",{d:"M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z"}))),s.a.createElement("button",{onClick:this.toggleSequencerBox},s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"whitesmoke",width:"24",height:"24",viewBox:"0 0 24 24"},s.a.createElement("path",{d:"M24 14v-4h-3.23c-.229-1.003-.624-1.94-1.156-2.785l2.286-2.286-2.83-2.829-2.286 2.286c-.845-.532-1.781-.928-2.784-1.156v-3.23h-4v3.23c-1.003.228-1.94.625-2.785 1.157l-2.286-2.286-2.829 2.828 2.287 2.287c-.533.845-.928 1.781-1.157 2.784h-3.23v4h3.23c.229 1.003.624 1.939 1.156 2.784l-2.286 2.287 2.829 2.829 2.286-2.286c.845.531 1.782.928 2.785 1.156v3.23h4v-3.23c1.003-.228 1.939-.624 2.784-1.156l2.286 2.286 2.828-2.829-2.285-2.286c.532-.845.928-1.782 1.156-2.785h3.231zm-12 2c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"})))),s.a.createElement(f,{hasClickedInstrumentOptions:this.state.hasClickedInstrumentOptions,hasClickedSequencerOptions:this.state.hasClickedSequencerOptions,onAddInstrumentClick:this.props.onAddInstrumentClick,instrumentOptions:this.props.instrumentOptions,className:this.state.hasClickedInstrumentOptions?"instrument-options-container active":"instrument-options-container"}),s.a.createElement(b,{onChangeBeatDivision:this.props.onChangeBeatDivision,beatDivisionOptions:this.props.beatDivisionOptions,toggleOptions:this.toggleSequencerBox,bpm:this.props.bpm,onChangeTempo:this.props.onChangeTempo,onChangeVolume:this.props.onChangeVolume,className:this.state.hasClickedSequencerOptions?"sequencer-options-container active":"sequencer-options-container"}))}}]),n}(s.a.Component),C=(n(54),n(27),n(55),function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return s.a.createElement("div",{className:"switch instrumentNameSwitch"},this.props.instrumentName)}}]),n}(a.Component)),O=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return s.a.createElement("div",{onClick:function(){return console.log("remove")},className:"switch"})}}]),n}(a.Component),y=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return s.a.createElement("div",{onClick:this.props.onClickInstrumentOptions,className:this.props.hasClickedSelectorOptions?"switch instrumentsOptionsSwitch active":"switch instrumentsOptionsSwitch"},s.a.createElement("div",null,"\u2630"))}}]),n}(a.Component),S=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).removeInstrument=function(){e.props.onRemoveInstrumentClick(e.props.selectorIndex)},e}return Object(u.a)(n,[{key:"render",value:function(){return s.a.createElement("div",{onClick:this.removeInstrument,className:"switch removeInstrumentSwitch"},"\u2715")}}]),n}(a.Component),I=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.counter,n=e.beats;return s.a.createElement("div",{className:"Visualizer"},s.a.createElement(O,null),n.map((function(e,n){return s.a.createElement("div",{className:t===e?"light active":"light",key:n})})),s.a.createElement(O,null),s.a.createElement(O,null))}}]),n}(s.a.Component),E=(n(56),function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).onClickerClick=function(){var t=e.props.beat;e.props.sendBeatsClicked(e.props.selectorIndex,t)},e}return Object(u.a)(n,[{key:"render",value:function(){return s.a.createElement("div",{className:"clicker ".concat(this.props.hasClicked?"active":""),onClick:this.onClickerClick}," ")}}]),n}(s.a.Component)),w=Object(h.a)({root:{color:"whitesmoke",height:2,padding:"15px 0"},thumb:{height:14,width:14,backgroundColor:"#fff","&:hover":{boxShadow:"none"}},active:{},valueLabel:{left:"calc(-50% - 4px)",top:-22,"& *":{background:"transparent",color:"whitesmoke"}},track:{height:2},rail:{height:2,opacity:.5,backgroundColor:"purple"},mark:{backgroundColor:"#bfbfbf",height:8,width:1,marginTop:-3},markActive:{opacity:1,backgroundColor:"currentColor"}})(d.a),N=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).sendNote=function(t){var n=t.target.id;e.props.updateInstrumentSettings("note",n,e.props.selectorIndex)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:this.props.className},s.a.createElement("span",{className:"text"}," note:"),this.props.notes.map((function(t,n){return t===e.props.noteSelected?s.a.createElement("div",{key:n,id:t,className:"note active"}," ",t," "):s.a.createElement("div",{key:n,id:t,onClick:e.sendNote,className:"note"}," ",t," ")})))}}]),n}(s.a.Component),j=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).sendDelay=function(e,t){var n=a.props.selectorIndex;a.props.updateInstrumentSettings("delay",t,n)},a.sendReverb=function(e,t){var n=a.props.selectorIndex;a.props.updateInstrumentSettings("reverb",t,n)},a.sendVolume=function(e,t){var n=a.props.selectorIndex;a.props.updateInstrumentSettings("volume",t,n)},console.log(a.props),a.state={volumeValue:a.props.volumeValue},a}return Object(u.a)(n,[{key:"render",value:function(){return s.a.createElement("div",{className:this.props.className},s.a.createElement("span",{className:"text"},"volume:"),s.a.createElement(w,{name:"volume",defaultValue:(e=this.state.volumeValue,5*(e+40)),getAriaValueText:this.valuetext,"aria-labelledby":"discrete-slider",min:0,max:100,onChange:this.sendVolume}),s.a.createElement("span",{className:"text"},"delay:"),s.a.createElement(w,{name:"delay",defaultValue:0,getAriaValueText:this.valuetext,"aria-labelledby":"discrete-slider",min:0,max:100,onChange:this.sendDelay}),s.a.createElement("span",{className:"text"},"reverb:"),s.a.createElement(w,{name:"delay",defaultValue:0,getAriaValueText:this.valuetext,"aria-labelledby":"discrete-slider",min:0,max:100,onChange:this.sendReverb}));var e}}]),n}(s.a.Component),x=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).hangleChange=function(t){e.setState({value:t.target.value})},e.updateNote=function(e,t){console.log(t)},e}return Object(u.a)(n,[{key:"render",value:function(){return s.a.createElement("div",{className:this.props.className},"melodic"===this.props.instrumentType?s.a.createElement(N,{noteSelected:this.props.noteSelected,selectorIndex:this.props.selectorIndex,notes:this.props.notes,className:"note-selector-container",updateInstrumentSettings:this.props.updateInstrumentSettings}):null,s.a.createElement(j,{volumeValue:this.props.volumeValue,className:"effects-options-container",selectorIndex:this.props.selectorIndex,updateInstrumentSettings:this.props.updateInstrumentSettings}))}}]),n}(s.a.Component),D=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).toggleOptions=function(){a.setState({hasClickedSelectorOptions:!a.state.hasClickedSelectorOptions})},a.state={hasClickedSelectorOptions:!1},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"Selector"},s.a.createElement(C,{instrumentName:this.props.instrumentName}),this.props.beats.map((function(t,n){return s.a.createElement(E,{beat:t,selectorIndex:e.props.selectorIndex,key:n,sendBeatsClicked:e.props.sendBeatsClicked,hasClicked:!0===e.props.beatsClicked.includes(t)})})),s.a.createElement(y,{onClickInstrumentOptions:this.toggleOptions,hasClickedSelectorOptions:this.state.hasClickedSelectorOptions}),s.a.createElement(S,{selectorIndex:this.props.selectorIndex,onRemoveInstrumentClick:this.props.onRemoveInstrumentClick})),s.a.createElement(x,{selectorIndex:this.props.selectorIndex,updateInstrumentSettings:this.props.updateInstrumentSettings,volumeValue:this.props.volumeValue,notes:this.props.notes,noteSelected:this.props.noteSelected,instrumentType:this.props.instrumentType,className:this.state.hasClickedSelectorOptions?"selector-options-container active":"selector-options-container"}))}}]),n}(s.a.Component),T=(n(57),n(16)),B=function e(t,n,a,s,r,o){Object(c.a)(this,e),this.beatsClicked=n,this.instrument=t,this.instrumentType=a,this.instrumentName=s,this.instrumentSettings=r,this.volumeNode=(new T.h).connect(o),this.instrument.connect(this.volumeNode)},V=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return s.a.createElement("div",{className:"container"},this.props.children)}}]),n}(s.a.Component),A=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;Object(c.a)(this,n),(a=t.call(this,e)).startStopLoop=function(){!1===a.state.isPlaying?(a.state.transport.start(),a.state.loopBeat.start(0)):!0===a.state.isPlaying&&a.state.loopBeat.stop(),a.setState({isPlaying:!a.state.isPlaying})},a.song=function(e){var t=a.state,n=t.counter,s=t.beatDivision;a.setState({counter:(n+1)%s}),a.playInstruments(e)},a.onAddInstrumentClick=function(e){var t,n,s={},r=e,o=(new T.a).toDestination(),i=(new T.d).connect(o);o.wet.value=0,i.wet.value=0,"kick"===e?(t=new T.c,n="melodic",s={note:{noteSelected:a.state.notes[0],octave:2}}):"synth"===e?(t=new T.f,n="melodic",s={note:{noteSelected:a.state.notes[0],octave:3}}):(t=new T.e({urls:{C2:"".concat(e,".mp3")},baseUrl:"https://res.cloudinary.com/dcttcffbc/video/upload/v1597045705/samples/react-sequencer/",onload:function(){return console.log("loaded")}}),n="melodic",s={note:{noteSelected:a.state.notes[0],octave:2}}),s.effects={reverb:o,delay:i};var c=new B(t,[],n,r,s,i);a.setState({allInstrumentData:[].concat(Object(l.a)(a.state.allInstrumentData),[c])})},a.removeInstrument=function(e){var t=a.state.allInstrumentData;t[e].instrument.disconnect(),t.splice(e,1),a.setState({allInstrumentData:t})},a.playInstruments=function(e){var t=a.state,n=t.allInstrumentData,s=t.counter;n.forEach((function(t){var n=t.instrument,a=t.instrumentType,r=t.beatsClicked,o=t.instrumentSettings;r.forEach((function(t){if(s===t)if("perc"===a)n.triggerAttackRelease("8n",e,1);else{if("melodic"!==a){throw"the instrument type is undefined"}n.triggerAttackRelease(o.note.noteSelected+o.note.octave,"8n",e,1)}}))}))},a.setBeatsClicked=function(e,t){var n=a.state.allInstrumentData.map((function(n,a){if(a!==e)return n;var s=n.beatsClicked,r=n.instrument,o=n.instrumentType,i=n.instrumentName,c=n.instrumentSettings,u=n.volumeNode;return!0===s.includes(t)?{instrument:r,beatsClicked:s.filter((function(e){return e!==t})),instrumentType:o,instrumentName:i,instrumentSettings:c,volumeNode:u}:{instrument:r,beatsClicked:[].concat(Object(l.a)(s),[t]),instrumentType:o,instrumentName:i,instrumentSettings:c,volumeNode:u}}));a.setState({allInstrumentData:n})},a.changeBeatDivision=function(e){var t=a.state.allInstrumentData.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{beatsClicked:[]})}));!0===a.state.isPlaying&&a.startStopLoop();var n=a.state.transport;n.timeSignature=e/16;for(var s=[],r=0;r<e;r++)s.push(r);a.setState({beatDivision:e,beats:s,allInstrumentData:t,transport:n,counter:0})},a.changeTempo=function(e){var t=a.state.transport;t.bpm.value=e,a.setState({transport:t})},a.changeVolume=function(e){var t=a.state.volume;console.log(t),t.volume.value=e,a.setState({volume:t})},a.updateInstrumentSettings=function(e,t,n){var s=a.state.allInstrumentData.map((function(a,s){if(s!==n)return a;var r=a.beatsClicked,o=a.instrument,i=a.instrumentType,l=a.instrumentName,c=a.instrumentSettings,u=a.volumeNode;if("note"===e)return c.note.noteSelected=t,{instrument:o,beatsClicked:r,instrumentType:i,instrumentName:l,instrumentSettings:c,volumeNode:u};if("reverb"===e){var m=t/100;return c.effects.reverb.wet.value=m,{instrument:o,beatsClicked:r,instrumentType:i,instrumentName:l,instrumentSettings:c,volumeNode:u}}if("delay"===e){var p=t/100;return c.effects.delay.wet.value=p,{instrument:o,beatsClicked:r,instrumentType:i,instrumentName:l,instrumentSettings:c,volumeNode:u}}if("volume"===e){var h=.2*t-40;return u.volume.value=h,{instrument:o,beatsClicked:r,instrumentType:i,instrumentName:l,instrumentSettings:c,volumeNode:u}}}));a.setState({allInstrumentData:s})};var s=new T.b(a.song,"16n"),r=T.g;r.timeSignature=1,r.bpm.value=140;for(var o=[],u=0;u<16;u++)o.push(u);return a.state={notes:["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],beats:o,instrumentOptions:["kick","snare","hat","crash","synth"],allInstrumentData:[],loopBeat:s,transport:r,beatDivision:16,beatDivisionOptions:[{value:2,label:2},{value:3,label:3},{value:4,label:4},{value:5,label:5},{value:6,label:6},{value:7,label:7},{value:8,label:8},{value:9,label:9},{value:10,label:10},{value:11,label:11},{value:12,label:12},{value:13,label:13},{value:14,label:14},{value:15,label:15},{value:16,label:16}],bpm:140,counter:0,isPlaying:!1},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.beatDivisionOptions,a=t.bpm,r=t.allInstrumentData,o=t.beats,i=t.counter,l=t.instrumentOptions,c=t.isPlaying;return s.a.createElement(V,null,s.a.createElement(k,{instrumentOptions:l,onStartLoopClick:this.startLoop,onStartStopLoopClick:this.startStopLoop,isPlaying:c,onRevealDataClick:this.revealData,onStopLoopClick:this.stopLoop,onAddInstrumentClick:this.onAddInstrumentClick,beatDivisionOptions:n,onChangeBeatDivision:this.changeBeatDivision,onChangeTempo:this.changeTempo,onChangeVolume:this.changeVolume,bpm:a}),s.a.createElement(I,{counter:i,beats:o}),r.map((function(t,n){return s.a.createElement(s.a.Fragment,{key:n},s.a.createElement(D,{selectorIndex:n,sendBeatsClicked:e.setBeatsClicked,updateInstrumentSettings:e.updateInstrumentSettings,beats:o,onRemoveInstrumentClick:e.removeInstrument,instrumentName:t.instrumentName,beatsClicked:t.beatsClicked,volumeValue:t.volumeNode.volume.value,instrumentType:t.instrumentType,notes:e.state.notes,noteSelected:"melodic"===t.instrumentType?t.instrumentSettings.note.noteSelected:null}))})))}}]),n}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(62);o.a.render(s.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.bca0989f.chunk.js.map