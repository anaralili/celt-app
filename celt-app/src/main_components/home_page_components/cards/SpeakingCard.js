import React, { Component } from 'react'

export class SpeakingCard extends Component {
    render() {
        return (
            <div className="homepage-cards">
                <h4 className="homepage-card-header">Speaking Reviews</h4>
                <div className="homepage-card-body">
                    <ul className="homepage-speaking-main-list">
                        <li className="homepage-speaking-list">
                            <div className="homepage-speaking-list-left">
                                <span>FL</span>
                                <p>B2 Unit 4A</p>
                            </div>
                        </li>
                        <li className="homepage-speaking-list">
                            <div className="homepage-speaking-list-left">
                                <span>FL</span>
                                <p>B2 Unit 9B</p>
                            </div>
                        </li>
                        <li className="homepage-speaking-list">
                            <div className="homepage-speaking-list-left">
                                <span>FL</span>
                                <p>B2 Unit 10B</p>
                            </div>
                        </li>
                        <li className="homepage-speaking-list">
                            <div className="homepage-speaking-list-left">
                                <span>FL</span>
                                <p>B2 End of Course</p>
                            </div>
                            <p>12:31 PM</p>
                        </li>
                    </ul>
                </div>
                <div className="homepage-card-footer">
                    <a href="#">View All</a>
                </div>
            </div>
        )
    }
}

export default SpeakingCard
