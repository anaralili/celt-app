import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchExamResults, changeStateMain } from '../../actions/MainActions';

export class Pagination extends Component {
    componentDidMount () {
        this.props.fetchExamResults();
    }
    
    nextPage (page, _) {
        const { examResults } = this.props;
        if (page < Math.ceil(examResults.length/12))
        this.props.changeStateMain({
            name: 'page',
            value: page+=1
        })
    }
    previousPage (page,_) {
        if (page > 1)
        this.props.changeStateMain({
            name: 'page',
            value: page-=1
        })
    }
    getPagination () {
        const { examResults } = this.props;
        let pagination = [];
        if (examResults) {
            for (let i = 1; i <= Math.ceil(examResults.length/12); i++){
                pagination.push(i)
            }
            return pagination;
        }
    }
    render() {
        const { examResults, page } = this.props;
        return (
            <div className="exam-result-footer">
                <p className="table-page">{((page-1) * 12)+1} to {12 * page} of {examResults ? examResults.length : null}</p>
                <div className="pagination">
                    <i className="fas fa-chevron-left" onClick={this.previousPage.bind(this, page)}></i>
                    {  examResults && Math.ceil(examResults.length/12) > 3 ? 
                        <>
                        {
                            (page - 1) !== 0 && page !== Math.ceil(examResults.length/12) && page !== (Math.ceil(examResults.length/12) - 1) ?
                            <p className="other_pages">{page-1}</p>: null
                        }
                        {
                             page == Math.ceil(examResults.length/12) || page == (Math.ceil(examResults.length/12) - 1) ?
                            <>
                            <p className="other_pages">1</p>
                            <i class="fas fa-ellipsis-h"></i>
                            </> : null
                        }
                        {
                            page !== Math.ceil(examResults.length/12) ?
                            <p className="current_page">{page}</p> : 
                            <p className="other_pages">{Math.ceil(examResults.length/12)-1}</p>
                        } 
                        {
                            page !== Math.ceil(examResults.length/12) && page !== (Math.ceil(examResults.length/12) - 1) ?
                            <i class="fas fa-ellipsis-h"></i>:null
                        }
                        {
                             page === Math.ceil(examResults.length/12) ?
                             <p className="current_page">{Math.ceil(examResults.length/12)}</p>: 
                             <p className="other_pages">{Math.ceil(examResults.length/12)}</p>
                        }
                            
                        </>
                        :
                        this.getPagination() && this.getPagination().map((result, i) => {
                            if (result === page) {
                                return (
                                    <p key={i} className="current_page">{result}</p>
                                )
                            }else {
                                return (
                                    <p key={i} className="other_pages">{result}</p>
                                )
                            }
                            
                        })
                    }
                    <i className="fas fa-chevron-right" onClick={this.nextPage.bind(this, page)}></i>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    examResults: state.Data.examResults,
    page: state.Data.page
})

const mapDispatchToProps = {fetchExamResults, changeStateMain}
export default connect(mapStateToProps, mapDispatchToProps)(Pagination)
