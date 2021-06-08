import React, { Component } from 'react'
import EssayCard from './EssayCard'
import HomeWorkCard from './HomeWorkCard'
import SpeakingCard from './SpeakingCard'

export class HomepageCards extends Component {
    render() {
        return (
            <div className="homepage-card-container grid">
                <HomeWorkCard />
                <EssayCard />
                <SpeakingCard />
            </div>
        )
    }
}

export default HomepageCards
