import React, { Component } from 'react';
import {connect} from 'react-redux';
import {changeStateMain} from '../../../actions/MainActions';

export class SaveRecorderAlert extends Component {
    closeAlertpage () {
        let newValue = {
            state: false,
            title: ''
        }
        this.props.changeStateMain({
            name: 'recorderPage',
            value: newValue
        })
        this.props.changeStateMain({
            name: 'alertPage',
            value: false
        })
    }
    render() {
        return (
            <div className="save_alert-container">
                <div className="alert_header">
                    <img src="./image/check.gif" className="alert-img" />
                    <h3>Speaking submitted!</h3>
                </div>
                <p className="alert-text-box">The Speaking was submitted. Your teacher will review it soon. You will be notified after your speaking is reviewed.</p>
                <button onClick={this.closeAlertpage.bind(this)} className="close-alert">OK</button>
            </div>
        )
    }
}

const mapStateToprops = (state) => ({})
const mapDispatchToProps = {changeStateMain}

export default connect(mapStateToprops, mapDispatchToProps)(SaveRecorderAlert)
