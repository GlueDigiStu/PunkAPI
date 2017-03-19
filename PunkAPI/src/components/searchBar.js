import React, {Component} from 'react';
import axios from 'axios';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        const request = axios.get('https://api.punkapi.com/v2/beers/beerList');
        console.log('request:',request);
            // .then(function (response) {
            //     console.log(response);
            // })
            // .catch(function (error) {
            //     console.log(error);
            // });
    }


    render() {
        return (
            <div>
                <form>
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

export default SearchBar;