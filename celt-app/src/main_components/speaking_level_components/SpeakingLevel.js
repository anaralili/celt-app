import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchSpekaingsLevel, changeStateMain} from '../../actions/MainActions'
import RecordPage from './RecordPage';

export class SpeakingLevel extends Component {
    componentDidMount () {
        this.props.fetchSpekaingsLevel()
    }
    clickRecorderPage (level,_) {
        let newValue = {
            state: true,
            title: level
        }
        this.props.changeStateMain({
            name: 'recorderPage',
            value: newValue
        })
    }
    render() {
        const {speakingLevels, recorderPage} = this.props;
        const level = this.props.match.params.level
        return (
            <div>
                {
                    speakingLevels ? speakingLevels.map((result, i) =>{
                        if (result.route === level) {
                            return (
                                <div className="speaking-levels-header" key={i}>
                                    <h5>{result.name}</h5>
                                </div>
                            )
                        }
                    })  
                    : null
                }
                
                <div className="speaking-levels-components grid">
                    {
                        speakingLevels ? speakingLevels.map((result, i) => {
                            if (result.route === level){
                                return (
                                    result.levels.map((level, j) => {
                                        return (
                                            <div className="level-component" key={j}>
                                                <p>{level.level}</p>
                                                <i className="fas fa-ellipsis-v">
                                                    <button className="speaking-records-btn" onClick={this.clickRecorderPage.bind(this, level.level)}>Record Speakings</button>
                                                </i>
                                            </div>
                                        )
                                    })
                                )
                            }
                        }): null
                    }
                </div>
                {
                    recorderPage.state ? <RecordPage /> : null
                }
                
            </div>
        )
    }
}
const mapStateToprops = (state) => ({
    speakingLevels: state.Data.speakingLevels,
    recorderPage: state.Data.recorderPage
})
const mapDispatchToProps = {fetchSpekaingsLevel, changeStateMain}

export default connect(mapStateToprops, mapDispatchToProps)(SpeakingLevel)
