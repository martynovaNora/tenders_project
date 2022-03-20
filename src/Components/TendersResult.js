import React, {Component} from "react";
import './TendersResult.css';
import store from '../store/store';
import { Link } from 'react-router-dom';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Dropdown } from "bootstrap";

class TendersResult extends Component {
    // container = React.createRef();
    // state = {
    //     open: false

    //  };
    //  componentDidMount() {
    //     document.addEventListener("mousedown", this.addToListHandler);
    //  };
    //  componentWillUnmount() {
    //     document.removeEventListener("mousedown", this.addToListHandler);
    //   };
    //   addToListHandler = (event) => {
    //     if (
    //       this.container.current &&
    //       !this.container.current.contains(event.target)
    //     ) {
    //       this.setState({
    //         open: false,
    //       });
    //     }
    //   };
    addToListHandler = (id, number, procurement_title, procurement, customer_title, customer, price_title, price, type, area_title, area, stage, time_one_title, time_one, time_two_title, time_two, time_three_title, time_three, time_for_title, time_for) => {
        store.dispatch({
            type: 'SEARCH_THE_TENDERS',
            payload: {
              id: id,
              number: number,
              procurement_title: procurement_title,
              procurement: procurement,
              customer_title: customer_title,
              customer: customer,
              price_title: price_title,
              price: price,
              type: type,
              area_title: area_title,
              area: area,
              stage: stage,
              time_one_title: time_one_title,
              time_one: time_one,
              time_two_title: time_two_title,
              time_two: time_two,
              time_three_title: time_three_title,
              time_three: time_three,
              time_for_title: time_for_title,
              time_for: time_for,
              
            }
          })
         
    }

    render() { 
        const { id, number, procurement_title, procurement, customer_title, customer, price_title, price, type, area_title, area, stage, time_one_title, time_one, time_two_title, time_two, time_three_title, time_three, time_for_title, time_for } = this.props;
        return (
            <>
                     
            <div className="container-xxl" key = {id}>
                <div className="d-flex bd-highlight">
                    <div className="p-2 w-100 bd-highlight">
                        <div className="type">{type}</div>
                            <a target='_blank' href="">{number}</a>
                                <div className="stage">{stage}</div>
                                <div className="tenders_title">{procurement_title}</div>
                            <div className='tenders_procurement'>{procurement}</div>
                            <div className="tenders_title">{customer_title}</div>
                    <div className='tenders_customer'>{customer}</div>
                    </div>  
                </div>
                    <div className="p-2 flex-shrink-1 bd-highlight">
                    <div className="tenders_title">{price_title}</div>
                        <div className="tenders_price">{price}</div>
                        <div className="tenders_title">{area_title}</div>
                            <div className="area">{area}</div>
                            <div className="tenders_title">{time_one_title}</div>
                                 <div className="time-one">{time_one}</div>
                                 <div className="tenders_title">{time_two_title}</div>
                                    <div className="time-two">{time_two}</div>
                                    <div className="tenders_title">{time_three_title}</div>
                                 <div className="time-three">{time_three}</div>
                                 <div className="tenders_title">{time_for_title}</div>
                            <div className="time-for">{time_for}</div>
                                <div className="btn-group" role="group">
                                <button href={id} onClick={() => this.addToListHandler( id)}id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Добавить в список
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                <li><a className="nav-link" href="#">Реестр выигранных конкурсов 44-ФЗ и 223-ФЗ</a></li>
                                <li><a className="nav-link" href="#">Общая стастика конкурсов 44-ФЗ, 223-ФЗ и коммерческие закупки</a></li>
                                </ul> 
                            </div>        
                         
                    
                    </div>
                    
                      
            </div> 
            
   
             </>
            
        );
    }
}
 
export default TendersResult;