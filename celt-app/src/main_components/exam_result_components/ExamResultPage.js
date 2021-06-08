import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchExamResults, changeStateMain } from '../../actions/MainActions';
import Pagination from './Pagination';

export class ExamResultPage extends Component {

    componentDidMount () {
        this.props.fetchExamResults();
    }
    searchInput (e) {
        this.props.changeStateMain({
            name: 'search',
            value: e.target.value
        })
    }
    render() {
        const { examResults, page, search } = this.props;
        return (
            <div className="exam_result-container">
                <h4 className="exam_result-header">Exam Results</h4>
                <div className="exam-searchbox">
                    <div className="table-searchbox">
                        <input type="text" name="search" value={search} onChange={this.searchInput.bind(this)} placeholder="Search" />
                        <i className="fas fa-search"></i>
                    </div>
                </div>
                <table className="exam-table">
                    <tbody>
                        <tr className="exam-result-header">
                            <th>Name</th>
                            <th>Date</th>
                            <th>Result</th>
                            <th>Points</th>
                            <th>Classes</th>
                            <th>Time</th>
                            <th>ACTIONS</th>
                        </tr>
                        {
                            examResults ? examResults.map((result, i) =>{
                               if (i< 12* page && i>= 12 *(page - 1) && search == ''){
                                return (
                                    <tr className="exam-results" key={i}>
                                        <td>{result.Name}</td>
                                        <td>{result.Date}</td>
                                        {
                                            result.Points < 60 ? 
                                            <td><p className="failed">Failed</p></td>:
                                            <td><p className="passed">Passed</p></td>
                                        }
                                        
                                        <td>{result.Points}</td>
                                        <td>{result.Classes}</td>
                                        <td>{result.Time}</td>
                                        <td><i className="fas fa-eye"></i></td>
                                    </tr>
                                )
                               }else if (search !== '' && result.Name.toLowerCase().includes(search.toLowerCase())){

                                   return (
                                       <tr className="exam-results" key={i}>
                                           <td>{examResults[i].Name}</td>
                                           <td>{examResults[i].Date}</td>
                                           {
                                               examResults[i].Points < 60 ? 
                                               <td><p className="failed">Failed</p></td>:
                                               <td><p className="passed">Passed</p></td>
                                           }
                                           
                                           <td>{examResults[i].Points}</td>
                                           <td>{examResults[i].Classes}</td>
                                           <td>{examResults[i].Time}</td>
                                           <td><i className="fas fa-eye"></i></td>
                                       </tr>
                                   )
                               }
                            }):null
                        }
                    </tbody>
                </table>
                <Pagination />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    examResults: state.Data.examResults,
    page: state.Data.page,
    search: state.Data.search
})

const mapDispatchToProps = {fetchExamResults, changeStateMain}
export default connect(mapStateToProps, mapDispatchToProps)(ExamResultPage)
