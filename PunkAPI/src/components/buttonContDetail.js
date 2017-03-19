import React, {Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import fetchBeers from '../actions/index';

class ButtonContDetail extends Component {

    componentWillMount() {
        this.props.fetchBeers('/random')
    }

    handleRandomClick = (event) => {
        event.preventDefault();
        this.props.fetchBeers('/random');
    };

    handleFubarClick = (event) => {
        event.preventDefault();
        this.props.fetchBeers('?ids=24');
    };

    handleHeavyClick = (event) => {
        event.preventDefault();
        this.props.fetchBeers('?abv_gt=20')
    };

    render() {
        return (
            <div>
                <button
                    className="btn btn-default"
                    onClick={this.handleRandomClick}
                >
                    I'm Feeling Lucky
                </button>
                <button
                    className="btn btn-default"
                    onClick={this.handleFubarClick}
                >
                    Let's Get Fubar'd
                </button>

                <button
                    className="btn btn-default"
                    onClick={this.handleHeavyClick}
                >
                    Show me What You Got
                </button>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchBeers}, dispatch)
}

function mapStateToProps(state) {
    return {beerList: state.beerList}
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonContDetail);