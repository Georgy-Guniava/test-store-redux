import React, {Component} from "react";
import Rater from 'react-rater-plus';
import html from 'react-inner-html';
import {Col, Thumbnail,Button} from 'react-bootstrap'
import PropTypes from 'prop-types';


export default class ProductList extends Component {

    render() {
        const { products } = this.props;

        return (
            products.map((product,i) => {
            return (<Col key={i} lg={3} md={3} sm={6} xs={12}>
                <Thumbnail src={require("../styles/img.jpg")} alt={product.name}>
                    <h3 {...html(product.highlightedName)} className='productName'></h3>
                    <p {...html(product.highlightedDescription)} className='description'></p>
                    <h2 className='rating'><Rater total={5} rating={product.rating} interactive={false} /></h2>
                    <h2 className='prise'><strong>Prise:</strong> {product.price} <i className="fa fa-rub" aria-hidden="true"> </i></h2>
                    <p className='button'>
                        <Button id={i} bsStyle="primary">Learn More</Button>&nbsp;
                        <Button bsStyle="primary">Add to Basket</Button>&nbsp;
                    </p>
                </Thumbnail>
            </Col>)})
        )
    }
}

ProductList.propTypes = {
    products: PropTypes.array.isRequired

};
