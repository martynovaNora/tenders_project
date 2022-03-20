import React, { Component } from 'react';
import store from '../store/store';
import './SearchList.css';
import { connect } from "react-redux";
import TendersResult from './TendersResult';

class SearchList extends Component {
    state = {
        tenders: [],
        new_tenders: []
    };
   
    componentDidMount() {
        store.subscribe (() => {
            const state = store.getState();
            this.setState({ 
                tenders: state.tenders 
                
            });
          });
         };     
    searchLineChangeTenders = (e) => {
        this.setState({ new_tenders: e.target.value });
       
    }
    
    searchBoxSubmitHandler = () => {
        store.dispatch({
            type: 'SEARCH_THE_TENDERS',
            payload: {
              new_tenders: this.state.new_tenders
            }
          })
          console.log (this.state.new_tenders)
    }
    
 
    render() {
     const {new_tenders}=this.state;
     console.log(this.state)
        return (
            <section className='container-xxl'>
                <div className='search-results' onSubmit={this.searchBoxSubmitHandler}>
                 <span className='search-results_title'>
                     Результаты поиска
                 </span>
                </div>
                <div>
                <form className="d-flex">
                    <input value={new_tenders} className="form-control me-2" type="search" placeholder="Ключевое слово" aria-label="Search" onChange={this.searchLineChangeTenders}/>
                    <button className="btn btn-outline-success" type="submit" onClick={this.searchBoxSubmitHandler} >Поиск</button>
                </form>
                  </div>
            </section>
               
        );
    }
}
const mapStateToProps = state => {
    return state
}
 
export default SearchList;