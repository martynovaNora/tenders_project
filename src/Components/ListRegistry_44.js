import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './ListRegistry_44.css';



class ListRegistry_44 extends Component {
   
    componentDidMount() {
         
        };
        
    render() { 
        const { title, movies } = this.state;
        console.log(title, movies);
        if (title, movies !== null) {
        return (
            <div className="list-page" style="background-image: url('https://oir.mobi/uploads/posts/2021-03/thumbs/1616983424_28-p-stroika-fon-29.jpg'); height: 748px;"  id="root" className="bg-image">
                <h1 className="list-page__title">Реестр выигранных конкурсов 44-ФЗ и 223-ФЗ</h1>
                <ul>
                    {this.state.movies.map((movies) => {
                        return (
                            <li key={movies.id}>
                                <a href="https://www.imdb.com/title/tt0068646/" target="_blank"> {movies.title}({movies.year}) </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        )};
    }
}
 
export default ListRegistry_44;