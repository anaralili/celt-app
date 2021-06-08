const initialState = {
    collapse: false,
    // nav buttons
    navButtons: [],
    // homepage
    homePageButtons: [],
    // exam result
    examResults: [],
    page: 1,
    search: '',
    // speaking levels
    speakingLevels:[],
    currentPage: '',
    // recorder
    recorderPage: {
        state: false,
        title: ''
    },
    recorder: false,
    timer: {
        seconds: 0,
        minutes: 0,
        hours: 0
    },
    audioUrl: '',
    recorderResult: false,
    alertPage: false
}
export default initialState;