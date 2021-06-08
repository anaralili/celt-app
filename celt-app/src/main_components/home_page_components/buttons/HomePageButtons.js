import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHomePageButtons } from '../../../actions/MainActions';

export class HomePageButtons extends Component {
    componentDidMount () {
       this.props.fetchHomePageButtons()
    }
    render() {
        const {homePageButtons} = this.props
        return (
            <div className="homepage-buttons-container grid">
                {
                    homePageButtons ? homePageButtons.map((result, i) => {
                        return (
                            <div className="homepage-buttons" key={i}>
                                <i className={`fas fa-${result.icon}`}></i>
                                <a href="#">{result.button}</a>
                            </div>
                        )
                    }): null
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    homePageButtons: state.Data.homePageButtons
});

const mapDispatchToProps = {fetchHomePageButtons}

export default connect(mapStateToProps, mapDispatchToProps)(HomePageButtons)
