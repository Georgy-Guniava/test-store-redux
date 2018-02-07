import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default class SearchBar extends Component {

    onChange(e) {
        this.props.onSearch(e.target.value)
    }

    render() {
        return (
            <div className="col-sm-10  col-md-10 col-lg-10 col-xs-10">
                <div className="form-group">
                    <input type="text" className="form-control" id="search_input" placeholder="Search..." autoFocus
                           onChange={this.onChange.bind(this)}/>
                </div>
            </div>
        )
    }
};

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired
};


