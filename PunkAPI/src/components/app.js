import React, {Component} from 'react';
import SearchBar from './searchBar';
import BeerDetail from './beerDetail';
import BeerList from './beerList';
import ButtonCont from './buttonCont';

export default class App extends Component {
    render() {
        return (
            // <div>Hello</div>
            <div>
                <div className="row">
                    <SearchBar/>
                </div>
                <div className="row">
                    <BeerDetail/>
                    <BeerList/>
                </div>
                <div className="row">
                    <ButtonCont/>
                </div>
            </div>
        );
    }
}
