import {Pagination} from 'react-bootstrap'
import React, {Component} from "react";
import PropTypes from 'prop-types';

export default class Paginate extends Component {
    constructor(props) {
        super(props);
        this.pageSelect = this.pageSelect.bind(this);
    }

    pageSelect(e) {
        this.props.setActivePageNumber( parseInt(e.target.id, 10) );
    }

    render() {
        const { products, active, lotProductsActive } = this.props;
        let paginLength = Math.ceil((products.length) / lotProductsActive);
        let items = [];
        for (let number = 1; number <= paginLength; number++) {
            items.push(
                <Pagination.Item id={number} key={number} onClick={this.pageSelect}
                                 active={number === active}>{number}</Pagination.Item>
            );
        }

        return (
            <div>
                <Pagination bsSize="small">{items}</Pagination>
            </div>
        );
    }

}

Paginate.propTypes = {
    products: PropTypes.array.isRequired,
    active: PropTypes.number.isRequired,
    setActivePageNumber: PropTypes.func.isRequired,
    lotProductsActive: PropTypes.number.isRequired
};
