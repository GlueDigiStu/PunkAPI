import React, {Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import fetchBeers from '../actions/index';

class ButtonContDetail extends Component{

    componentWillMount(){
        this.props.fetchBeers('/random')
    }

    handleClick = (e) =>{
        e.preventDefault();
        this.props.fetchBeers('/random');
        console.log('state', this.state);
        console.log('props', this.props.beerList.beers[0].name);
    };

    render() {
        return (
            <button
                className="btn btn-default"
                onClick={this.handleClick}
            >
                I'm Feeling Lucky
            </button>
        )
    }
}


function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchBeers}, dispatch)
}

function mapStateToProps(state){
    return{beerList: state.beerList}
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonContDetail);