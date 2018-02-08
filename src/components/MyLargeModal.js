import React, {Component} from 'react';
import Rater from 'react-rater-plus';
import {Modal, Carousel,Button } from 'react-bootstrap'
import PropTypes from 'prop-types';





export default class MyLargeModal extends Component {
    constructor(props) {
        super(props);
        this.lgClose = this.lgClose.bind(this);
    }

    lgClose() {
        this.props.modalClose()
    }

    render() {


        const { activeProduct } = this.props;

        return (

            <Modal
                {...this.props}
                bsSize="large"
                aria-labelledby="contained-modal-title-lg"
                onHide={this.lgClose}


            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">React Test Store/{activeProduct.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <Carousel>
                        <Carousel.Item>
                            <img className="center-block"  width={500} height={500} alt={activeProduct.name} src={require("../styles/img.jpg")}/>
                            <Carousel.Caption>
                                <h3>{activeProduct.name}</h3>
                                <p>{activeProduct.description}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="center-block"  width={500} height={500} alt={activeProduct.name} src={require("../styles/img.jpg")} />
                            <Carousel.Caption>
                                <h3>{activeProduct.name}</h3>
                                <h3><Rater total={5} rating={activeProduct.rating} interactive={false} />Rating</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="center-block" width={500} height={500} alt={activeProduct.name} src={require("../styles/img.jpg")} />
                            <Carousel.Caption>
                                <h3>{activeProduct.name}</h3>
                                <p><strong>Price:</strong> {activeProduct.price} <i className="fa fa-rub" aria-hidden="true"> </i></p>
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
    activeProduct: PropTypes.object.isRequired,
    modalClose: PropTypes.func.isRequired
};

