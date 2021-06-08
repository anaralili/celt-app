import { CHANGE_STATE_MAIN} from './types';

import axios from 'axios';
// NAV BUTTONS ACTIONS

export const fetchNavButtons = () => dispatch => {
  axios
    .get(`JSON_FILES/NavButtons.json`)
    .then(response =>
      dispatch({
        type: CHANGE_STATE_MAIN,
        payload: {name: 'navButtons', value: response.data.buttons},   
      })
    )
    .catch(err => console.log(err));
};

// HOMEPAGE ACTIONS

export const fetchHomePageButtons = () => dispatch => {
  axios
    .get(`JSON_FILES/HomePageButtons.json`)
    .then(response =>
      dispatch({
        type: CHANGE_STATE_MAIN,
        payload: {name: 'homePageButtons', value: response.data.buttons},   
      })
    )
    .catch(err => console.log(err));
};

// EXAM RESULT PAGE ACTIONS
export const fetchExamResults = () => dispatch => {
  axios
    .get(`JSON_FILES/ExamResults.json`)
    .then(response =>
      dispatch({
        type: CHANGE_STATE_MAIN,
        payload: {name: 'examResults', value: response.data.results},   
      })
    )
    .catch(err => console.log(err));
};


export const fetchSpekaingsLevel = () => dispatch => {
  axios
    .get(`JSON_FILES/SpeakingLevels.json`)
    .then(response =>
      dispatch({
        type: CHANGE_STATE_MAIN,
        payload: {name: 'speakingLevels', value: response.data.speakings},   
      })
    )
    .catch(err => console.log(err));
};


export const changeStateMain = (data) => {
  return {
    type: CHANGE_STATE_MAIN,
    payload: {name: data.name, value: data.value},
  };
};

