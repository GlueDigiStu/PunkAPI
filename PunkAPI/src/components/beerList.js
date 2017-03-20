import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import fetchBeers from '../actions/index';

class BeerList extends Component {
    constructor(props) {
        super(props);
    }

    renderList() {
        console.log('beerList', this.props.beerList);
        return this.props.beerList.beers.map((beers) => {
            return (
                <li
                    key={beers.name}
                    className="list-group-item">
                    {beers.name}
                </li>
            )
        })
    }



    render(){
        if(this.props.beerList) {
            return (
                <div className="col-xs-4">
                    <ul>
                        {this.renderList()}
                    </ul>
                </div>
            )
        } else {
            return(<div>Loading</div>)
        }
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchBeers}, dispatch)
}

function mapStateToProps(state) {
    return {beerList: state.beerList}
}

export default connect(mapStateToProps, mapDispatchToProps)(BeerList);