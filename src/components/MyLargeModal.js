import React, {Component} from 'react';
import Rater from 'react-rater-plus';
import {Button, Carousel, Modal} from 'react-bootstrap'
import PropTypes from 'prop-types';

export default class MyLargeModal extends Component {
  constructor(props) {
    super(props);
    this.lgClose = this.lgClose.bind(this);
  }

  lgClose() {
    this.props.onClick()
  }

  render() {


    const {activeproduct} = this.props;
    const product = activeproduct;

    return (

      <Modal
        {...this.props}
        bsSize="large"
        aria-labelledby="contained-modal-title-lg"
        onHide={this.lgClose}


      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">React Test Store/{product.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            <Carousel.Item>
              <img className="center-block" width={500} height={500} alt={product.name}
                   src={require('../styles/img.jpg')}/>
              <Carousel.Caption>
                <h3 className="modalText">{product.name}</h3>
                <p className="modalText">{product.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="center-block" width={500} height={500} alt={product.name}
                   src={require('../styles/img.jpg')}/>
              <Carousel.Caption>
                <h3 className="modalText">{product.name}</h3>
                <h3 className="modalText"><Rater total={5} rating={product.rating}/>Rating</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="center-block" width={500} height={500} alt={product.name}
                   src={require('../styles/img.jpg')}/>
              <Carousel.Caption>
                <h3 className="modalText">{product.name}</h3>
                <p className="modalText"><strong>Price:</strong> {product.price} <i className="fa fa-rub"
                                                                                    aria-hidden="true"> </i></p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.lgClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

MyLargeModal.propTypes = {
  activeproduct: PropTypes.object.isRequired,
  onClick      : PropTypes.func.isRequired
};

