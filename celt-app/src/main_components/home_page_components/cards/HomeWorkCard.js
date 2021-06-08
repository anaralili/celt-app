import React, { Component } from 'react'

export class HomeWorkCard extends Component {
    render() {
        return (
            <div className="homepage-cards">
                <h4 className="homepage-card-header">HomeWork TODO</h4>
                <div className="homepage-card-body">
                    <ul className="homepage-homework-main-list">
                        <li className="homepage-homework-list">
                            <h5>HW U4 L3</h5>
                            <p>CELT English Az</p>
                        </li>
                        <li className="homepage-homework-list">
                            <h5>HW U4 L3</h5>
                            <p>CELT English Az</p>
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

export default HomeWorkCard
