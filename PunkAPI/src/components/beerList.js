import React, {Component} from 'react';
import BeerListDetail from './beerListDetail';

class BeerList extends Component{
    render(){
        return(
            <div className="col-xs-4">
                <BeerListDetail/>


            </div>
        )
    }
}

export default BeerList;