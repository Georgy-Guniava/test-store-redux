import React, {Component} from 'react';

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
            <div className="col-sm-10  col-md-10 col-lg-10 col-xs-10">
                <div className="form-group">
                    <input type="text" className="form-control" id="search_input" placeholder="Search..." autoFocus
                           onChange={this.onChange}/>
                </div>
            </div>
        )
    }
};



