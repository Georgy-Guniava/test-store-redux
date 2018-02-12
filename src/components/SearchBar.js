import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.props.onSearch(e.target.value)
    }

    render() {
        return (
            <div className="col-sm-7 col-md-8 col-lg-9 col-xs-12">
                <div className="form-group">
                    <input type="text" className="form-control" id="search_input" placeholder="Search..." autoFocus
                           onChange={this.onChange}/>
                </div>
            </div>
        )
    }
};

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired
};


