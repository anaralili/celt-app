import React, { Component } from 'react'

export class NotificationBtn extends Component {
    render() {
        return (
            <div className="notification-button">
                <i className="fas fa-bell"></i>
                <p className="notification-text">
                    Activate Notification
                </p>
            </div>
        )
    }
}

export default NotificationBtn
