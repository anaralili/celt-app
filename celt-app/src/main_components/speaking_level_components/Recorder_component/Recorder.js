import React, { Component } from 'react';
import {connect} from 'react-redux';
import {changeStateMain} from '../../../actions/MainActions'

export class Recorder extends Component {


  componentDidMount () {
    const startRecordBtn = document.querySelector('.start-record');  
    const stopRecordBtn = document.querySelector('.stop-record');
    const cancelRecord = document.querySelector('.fa-trash');

    this.props.changeStateMain({
      name: 'recorderResult',
      value: false
    })

    let typeOfMedia = {
      audio: true          
    };

    let chunks = [];

    var options = {
      audioBitsPerSecond: 128000,
      videoBitsPerSecond: 2500000,
      mimeType: 'audio/webm'
    }
    let recStream;
    const recFunction = async() => {
      try {
        
        const mediaDevices = await navigator.mediaDevices.getUserMedia(typeOfMedia)
        if (mediaDevices.active === true) {

            recStream = new MediaRecorder(mediaDevices, options);

            recStream.ondataavailable = e => {
              chunks = []
              chunks.push(e.data);
              if (recStream.state == 'inactive') {

                const  blob = new Blob(chunks)
                  const audio_url = URL.createObjectURL(blob)
                  this.props.changeStateMain({
                    name: 'audioUrl',
                    value: audio_url
                  })                
              }
            }
            recStream.start()
        }
      } catch (error) {
          if (error) console.log(error);
      }
    }
    // start button
    startRecordBtn.addEventListener('click', ()=>{
      recFunction()
    })

    // stop button
    stopRecordBtn.addEventListener('click', () =>{
      recStream.stop()
    })
  
    // cancel recording 
    cancelRecord.addEventListener('click', () =>{
      recStream.stop()
    })
    
  }
  startTimer () {

    const stopRecordBtn = document.querySelector('.stop-record');
    const startRecordBtn = document.querySelector('.start-record'); 
    const cancelRecord = document.querySelector('.fa-trash');
    const timerContainer = document.querySelector('.record-timer');

    stopRecordBtn.classList.remove('display');
    startRecordBtn.classList.add('display')
    timerContainer.classList.remove('display')
    cancelRecord.classList.remove('display')

    this.props.changeStateMain({
      name: 'audioUrl',
      value: ''
    })
    this.props.changeStateMain({
      name: 'recorderResult',
      value: false
    })


    let seconds = 0;
    let minutes = 0;
    let hours = 0
    let myTimer = setInterval(()=>{
      seconds++;
      if (seconds === 60){
        seconds = 0;
        minutes++
      }else if(minutes === 60){
        minutes = 0;
        hours++
      }
      let newTimer = {
        seconds: seconds,
        minutes: minutes,
        hours: hours
      }
      this.props.changeStateMain({
        name: 'timer',
        value: newTimer
      })
    },1000)

// stop recording

    stopRecordBtn.addEventListener('click', (e) =>{
      clearInterval(myTimer)
      this.props.changeStateMain({
        name: 'recorderResult',
        value: true
      })

      stopRecordBtn.classList.add('display');
      startRecordBtn.classList.remove('display')
      cancelRecord.classList.add('display')
    })
// cancel recording
    cancelRecord.addEventListener('click', (e)=>{

      clearInterval(myTimer)
      let newTimer = {
        seconds: 0,
        minutes: 0,
        hours: 0
      }

      this.props.changeStateMain({
        name: 'timer',
        value: newTimer
      })

      this.props.changeStateMain({
        name: 'recorderResult',
        value: false
      })
      stopRecordBtn.classList.add('display');
      startRecordBtn.classList.remove('display');
      timerContainer.classList.add('display')
    })

  }

  render() {
    const {timer, audioUrl, recorderResult} = this.props;

    return (
      <div>
        <div className="record-component" > 
          <p>Record</p>
          <button  className="stop-record display">
              <i className="fas fa-microphone"></i>
          </button> 
          <button className="start-record"  onClick={this.startTimer.bind(this)}>
            <i className="fas fa-microphone"></i>
          </button> 

          <div className="record-timer display">
            <p>
              { timer.hours <10 ? '0'+timer.hours :timer.hours}:
              {timer.minutes < 10 ? '0'+timer.minutes : timer.minutes}:
              {timer.seconds <10 ? '0'+timer.seconds : timer.seconds}
            </p>
            <i className="fas fa-trash"></i>
          </div>       
        </div>
        {
          recorderResult && audioUrl !== '' ? 
          <div className="audio" >
            <audio controls className="recording">
              <source src={audioUrl} type="audio/ogg" />
            </audio>
          </div> : null
        }
        
      </div>
      
    )
  }
}

const mapStateToprops = (state) => ({
  timer: state.Data.timer,
  audioUrl: state.Data.audioUrl,
  recorderResult: state.Data.recorderResult
})

const mapDispatchToProps = {changeStateMain}
export default connect(mapStateToprops, mapDispatchToProps)(Recorder)
