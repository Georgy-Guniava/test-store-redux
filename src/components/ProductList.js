import React, {Component} from 'react';
import Rater from 'react-rater-plus';
import html from 'react-inner-html';
import {Button, Col, Thumbnail} from 'react-bootstrap'
import PropTypes from 'prop-types';
import {createNotification} from './Example';

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.learnMore = this.learnMore.bind(this);
  }


  learnMore(e) {
    this.props.showModal(e.target.id, 10);
  };

  render() {

    const {products} = this.props;
    if (products.length === 0) {
      return <h1 className="notFound">Nothing found on your request</h1>
    } else {
      return (products.map((product, i) => {
          return (<Col key={i} lg={3} md={3} sm={6} xs={12}>
            <Thumbnail src={require('../styles/img.jpg')} alt={product.name}>
              <h3 {...html(product.highlightedName)} className='productName'></h3>
              <p {...html(product.highlightedDescription)} className='description'></p>
              <h2 className='rating'><Rater total={5} rating={product.rating}/></h2>
              <h2 className='priсe'><strong>Priсe:</strong> {product.price} <i className="fa fa-rub"
                                                                               aria-hidden="true"> </i></h2>
              <p className='button'>
                <Button id={i} bsStyle="primary" onClick={this.learnMore}>Learn More</Button>&nbsp;
                <Button bsStyle="primary"
                        onClick={createNotification({type: 'success', title: product.name, message: 'Added to cart'})}>Add
                  to Basket</Button>&nbsp;
              </p>
            </Thumbnail>
          </Col>)
        })
      )
    }

  }
}

ProductList.propTypes = {
  products : PropTypes.array.isRequired,
  showModal: PropTypes.func.isRequired

};
