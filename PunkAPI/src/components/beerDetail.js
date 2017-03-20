import React, {Component} from 'react';
import {connect} from 'react-redux';

class BeerDetail extends Component {
    constructor(props) {
        super(props);
    }

    componentWillUpdate() {
        console.log('this.props', this.props)
    };

    render() {
        if (this.props.beerList) {
            return (
                <div className="col-xs-8">
                    <div className="col-xs-4">
                        <img className="beer-img"
                            src={this.props.beerList.activeBeer.image_url}
                        />
                    </div>
                    <div className="col-xs-8">

                        <h3>
                            {this.props.beerList.activeBeer.name}
                        </h3>

                        <h4>{this.props.beerList.activeBeer.tagline}</h4>
                        <p>{this.props.beerList.activeBeer.description}</p>
                    </div>
                </div>
            )
        } else {
            return (
                <div>Loading</div>
            )
        }
    }
}

function mapStateToProps(state) {
    return {beerList: state.beerList}
}

export default connect(mapStateToProps)(BeerDetail);