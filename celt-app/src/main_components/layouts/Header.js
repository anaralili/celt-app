import React, { Component } from 'react';
import { connect } from 'react-redux';
import {changeStateMain, fetchNavButtons} from '../../actions/MainActions'

export class Header extends Component {
    componentDidMount () {
        this.props.fetchNavButtons()
        const currentLocation = window.location.href
        this.props.changeStateMain({
            name: 'currentPage',
            value: currentLocation.split('/')[4]
        })
    }
    render() {
        const {currentPage, navButtons} = this.props;
        return (
            <header>
                <div className="header-container">
                    <label htmlFor="check-navbar">
                        <i className="fas fa-chevron-right"></i>
                    </label>
                <div className="header-username-container">
                        <img className="language-flag" src="image/the US flag.png" alt="language flag" />
                        <p className="header-username">Hi, Firstname Lastname</p>
                        <p className="username-first-letter">F</p>
                </div>
                </div>
                <div className="dashboard">
                    <input type="checkbox" id="check-navbar" />
                   
                        {
                            navButtons ? navButtons.map((result,i) => {
                                if (result.path === currentPage) {
                                    return (
                                        <div className="dashboard-container" key={i}>
                                            <h4>{result.name}</h4>
                                            <i className="fas fa-sort-up"> {result.name}</i>
                                        </div>
                                    )
                                }
                            }): null
                        }
                </div>
            </header>
        )
    }
}

const mapStateToprops = (state) => ({
    currentPage: state.Data.currentPage,
    navButtons: state.Data.navButtons
})
const mapDispatchToProps = {changeStateMain, fetchNavButtons}
export default connect(mapStateToprops, mapDispatchToProps)(Header)
