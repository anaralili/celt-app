import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';
// pages
import Header from './main_components/layouts/Header';
import Navbar from './main_components/layouts/Navbar';
import Footer from './main_components/layouts/Footer';
import HomePage from './main_components/home_page_components/HomePage';
import ExamResultPage from './main_components/exam_result_components/ExamResultPage';
import SpeakingPage from './main_components/speakings_components/SpeakingPage';
import SpeakingLevel from './main_components/speaking_level_components/SpeakingLevel';
import NotificationBtn from './main_components/layouts/NotificationBtn';

// css
import './css/style.css';
import './css/responsive.css';


export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
              <input type="checkbox" id="check-navbar" />
              <Header />
              <Navbar />
              <section>
                <div className="container">
                  <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/results" exact component={ExamResultPage} />
                    <Route path="/speakings" exact component={SpeakingPage} />
                    <Route path="/speakings/levels/:level" exact component={SpeakingLevel} />
                  </Switch>  
                </div>
              </section>
              <NotificationBtn />
              <Footer /> 
          </div>
        </Router>
    </Provider>
    )
  }
}

export default App
