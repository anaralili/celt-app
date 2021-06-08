import React, { Component } from 'react';
import {connect} from 'react-redux';
import {changeStateMain} from '../../actions/MainActions'
import Recorder from './Recorder_component/Recorder';
import SaveRecorderAlert from './Recorder_component/SaveRecorderAlert';

export class RecordPage extends Component {

    closeRecorderPage (){
        const timerContainer = document.querySelector('.record-timer');
        let newValue = {
            state: false,
            title: ''
        }
        this.props.changeStateMain({
            name: 'recorderPage',
            value: newValue
        })
    }
    deleteRecorder () {
        const timerContainer = document.querySelector('.record-timer');
        timerContainer.classList.add('display')
        this.props.changeStateMain({
            name: 'recorderResult',
            value: false
        })

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
            name: 'audioUrl',
            value: ''
          })
    }
    saveRecord () {
        const {audioUrl, recorderPage} = this.props;
        

        if(audioUrl !== '') {
            let arr = [];
            if(JSON.parse(localStorage.getItem('celtAudioRecorder'))){
                arr = [JSON.parse(localStorage.getItem('celtAudioRecorder'))]
                let saveRecorder = {
                    title: recorderPage.title,
                    url: audioUrl
                }
                arr.push(saveRecorder);
                localStorage.setItem('celtAudioRecorder', JSON.stringify(arr))
                this.props.changeStateMain({
                    name: 'alertPage',
                    value: true
                })
            }else{
                let saveRecorder = {
                    title: recorderPage.title,
                    url: audioUrl
                }
                
                arr.push(saveRecorder);
                localStorage.setItem('celtAudioRecorder', JSON.stringify(arr))
                this.props.changeStateMain({
                    name: 'alertPage',
                    value: true
                })
            }
            let newTimer = {
                seconds: 0,
                minutes: 0,
                hours: 0
              }
        
              this.props.changeStateMain({
                name: 'timer',
                value: newTimer
            })
        }
    }
    render() {
        const {recorderPage, alertPage} = this.props;
        return (
            <div className="record-page-container">
                {
                !alertPage ?
                <div className="recording-component">
                    <h5 className="recording-component-header">Speakings</h5>
                    <div className="recording-component-title">
                        <h5>Title</h5>
                        <h5>{recorderPage.title}</h5>
                    </div>
                    <div className="recording-component-question-container">
                        <h5>Questions</h5>
                        <div className="recording-component-questions">
                            <h5>Speaking question topic name</h5>
                            <ul>
                                <li>Question 1</li>
                                <li>Question 2</li>
                                <li>Question 3</li>
                            </ul>
                            <p>Please, talk about at least 30 seconds</p>
                        </div>
                    </div>
                    <Recorder />
                    <div className="recording_container-footer">
                        <button onClick={this.closeRecorderPage.bind(this)}>CLOSE</button>
                        <div className="recording-footer-btns">
                            <button onClick={this.deleteRecorder.bind(this)}>DELETE RECORDING</button>
                            <button onClick={this.saveRecord.bind(this)}>SAVE</button>
                        </div>
                    </div>
                </div>: <SaveRecorderAlert /> 
                }
            </div>
        )
    }
}
const mapStateToprops = (state) => ({
    recorderPage: state.Data.recorderPage,
    alertPage: state.Data.alertPage,
    audioUrl: state.Data.audioUrl
})

const mapDispatchToProps = {changeStateMain}

export default connect(mapStateToprops, mapDispatchToProps)(RecordPage)
