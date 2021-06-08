import React, { Component } from 'react'

export class EssayCard extends Component {
    render() {
        return (
            <div className="homepage-cards">
                <h4 className="homepage-card-header">Essay Reviews</h4>
                <div className="homepage-card-body">
                    <ul className="homepage-essay-main-list">
                        <li className="homepage-essay-list">
                        <span> </span>
                        <i className="fas fa-square"></i>
                        <p>B1 UNIT 3A</p>
                        </li>
                        <li className="homepage-essay-list">
                            <span> </span>
                            <i className="fas fa-square"></i>
                            <p>B1+UNIT 1A </p>
                        </li>
                        <li className="homepage-essay-list">
                            <span> </span>
                            <i className="fas fa-square"></i>
                            <p>B1 End of Course A</p>
                        </li>
                        <li className="homepage-essay-list">
                            <span> </span>
                            <i className="fas fa-square"></i>
                            <p>B1 Mid-Term A</p>
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

export default EssayCard
