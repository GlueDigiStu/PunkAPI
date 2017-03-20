import React, {Component} from 'react';
// import axios from 'axios';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchBeers} from '../actions/index';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.fetchBeers(`?beer_name=${this.state.value}`);
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="col-xs-10">
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="col-xs-2">
                        <button className="btn btn-default">
                            Search
                        </button>
                    </div>
                </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);