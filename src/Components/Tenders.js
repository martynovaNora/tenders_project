import React, {Component} from "react";
import './Tenders.css';
import TendersResult from '../Components/TendersResult';
import store from "../store/store";
import { connect } from "react-redux";

class Tenders extends Component {
    state = {
       tenders: []
    };
    componentDidMount() {
        store.subscribe (() => {
            const state = store.getState();
            this.setState({ 
                tenders: state.tenders 
            });
          });
         };
    render() { 
        const { tenders } = this.state;
        
        console.log({tenders});
        return (
            <>
            {this.state.tenders.map (item => (
                    <ul className="tenders__list" key={item.id}>
                        <TendersResult {...item} />
                    </ul>
              ))}
            </> 
            
        );
    }
    
    
}
 
export default Tenders;



