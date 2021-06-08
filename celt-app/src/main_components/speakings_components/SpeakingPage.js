import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchSpekaingsLevel } from '../../actions/MainActions';

export class SpeakingPage extends Component {
    componentDidMount () {
        this.props.fetchSpekaingsLevel()
    }
    render() {
        const { speakingLevels } = this.props;
        return (
            <div className="speaking-container">
               <div className="speaking-component-header">
                   <h5>Speakings</h5>
               </div>
               <div className="speaking-component-body grid">
                   {
                       speakingLevels ? speakingLevels.map((result, i) => {
                          return (
                            <div className="speaking-level-components" key={i}>
                                <img src={result.image} alt={result.image} />
                                <Link 
                                  to={`/speakings/levels/${result.route}`} 
                                  className="speaking-level-btn"
                                >{result.name}</Link>
                            </div>
                          )
                       }): null
                   }
               </div>
           </div>
        )
    }
}

const mapStateToprops = (state) => ({
    speakingLevels: state.Data.speakingLevels
})
const mapDispatchToProps = {fetchSpekaingsLevel}
export default connect(mapStateToprops, mapDispatchToProps)(SpeakingPage)
