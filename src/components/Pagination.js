import {Pagination} from 'react-bootstrap'
import React, {Component} from "react";
import PropTypes from 'prop-types';
import ProductList from './ProductList';



export default class Paginate extends Component {

    pageSelect(e) {
        this.props.setActivePageNumber( parseInt(e.target.id) );
    }

    render() {
        const { products, active } = this.props;
        let paginLength = Math.ceil((products.length) / 4);
        let items = [];
        for (let number = 1; number <= paginLength; number++) {
            items.push(
                <Pagination.Item id={number} key={number} onClick={this.pageSelect.bind(this)}
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

ProductList.propTypes = {
    products: PropTypes.array.isRequired,
    active: PropTypes.number.isRequired,
    setActivePageNumber: PropTypes.func.isRequired
};
