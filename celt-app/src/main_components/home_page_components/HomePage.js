import React, { Component } from 'react'
import HomePageButtons from './buttons/HomePageButtons'
import HomepageCards from './cards/HomepageCards'

export class HomePage extends Component {
    render() {
        return (
            <div>
                <HomepageCards />
                <HomePageButtons />
            </div>
        )
    }
}

export default HomePage
