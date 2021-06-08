import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {changeStateMain, fetchNavButtons} from '../../actions/MainActions'
export class Navbar extends Component {

    componentDidMount () {
        this.props.fetchNavButtons()
    }
    currentPage (path, e) {     
        this.props.changeStateMain({
            name: 'currentPage',
            value: path
        })
    }
    render() {
        const {navButtons} = this.props;
        return (
            <nav>
                <div className="nav-header">
                    <img className="logo" src="image/celt-logo.png" alt="logo" />
                    <label htmlFor="check-navbar">
                        <i className="fas fa-chevron-left"></i>
                    </label>
                </div>
                <ul className="main-nav">
                    {
                        navButtons ? navButtons.map((result, i) => {
                            return (
                                <li key={i}>
                                    <Link to={`/${result.path}`} onClick={this.currentPage.bind(this, result.path)}>
                                        <i className={`fas fa-${result.icon}`}></i>{result.name}
                                    </Link>
                                </li>
                            )
                        }): null
                    }
                </ul>
            </nav>
        )
    }
}

const mapStateToprops = (state) => ({
    navButtons: state.Data.navButtons
})

const mapDispatchToProps = {changeStateMain, fetchNavButtons}
export default connect(mapStateToprops, mapDispatchToProps)(Navbar)
