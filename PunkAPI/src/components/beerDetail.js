import React, {Component} from 'react';
import {connect} from 'react-redux';

class BeerDetail extends Component {
    constructor(props) {
        super(props);
        // this.props = {beerList : { name: []}}
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
                            src={this.props.beerList.beers[0].image_url}
                        />
                    </div>
                    <div className="col-xs-8">

                        <h3>
                            {this.props.beerList.beers[0].name}
                        </h3>

                        <h4>{this.props.beerList.beers[0].tagline}</h4>
                        <p>{this.props.beerList.beers[0].description}</p>
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

// BeerDetail.defaultProps = {
//     beerList: {
//         name: 'test'
//     }
// };

function mapStateToProps(state) {
    return {beerList: state.beerList}
}

export default connect(mapStateToProps)(BeerDetail);