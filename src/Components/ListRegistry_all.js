import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './ListRegistry_all.css';
import { Link } from 'react-router-dom';
import store from '../store/store';
import { connect } from 'react-redux';



class ListRegistry_all extends Component {
    state = {
        tenders: [],
        title: "Общая стастика конкурсов 44-ФЗ, 223-ФЗ и коммерческие закупки",
        id: "",
        number: "",
        procurement: "",
        customer: ""
    }
    
    componentDidMount() {
        store.subscribe (() => {
            const state = store.getState();
            this.setState({ 
                tenders: state.tenders 
            });
          });
        };
        
          
    render() { 
        console.log(this.state);
        const { title, tenders } = this.state.tenders;
        console.log(title, tenders);
        if (title, tenders !== null) {
        return (
            <div className="list-page">
                <h1 className="list-page__title">Общая стастика конкурсов 44-ФЗ, 223-ФЗ и коммерческие закупки</h1>
                <ul>
                    {this.state.tenders.map((tenders) => {
                        return (
                            <li key={tenders.id}>
                                <a href="" target="_blank"> {tenders.title}({tenders.number}, {tenders.procurement}, {tenders.customer}) </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        )};
    }
}
 
export default ListRegistry_all;
