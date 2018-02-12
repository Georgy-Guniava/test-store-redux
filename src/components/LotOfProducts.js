import React, {Component} from 'react';
import {ButtonToolbar, ButtonGroup, Button} from 'react-bootstrap'
import PropTypes from 'prop-types';

export default class LotOfProducts extends Component {
    constructor(props) {
        super(props);
        this.lotProductsSelect = this.lotProductsSelect.bind(this);
    }

    lotProductsSelect(e) {
        this.props.setLotProducts(parseInt(e.target.id, 10));
    }

    render() {
        const { lotProductsActive, lotProductsItems}  = this.props;
        const items = [];
        lotProductsItems.forEach((element,i) => {
            items.push(
                <Button id={element} key={i} onClick={this.lotProductsSelect}
                                 active={element === lotProductsActive}>{element}</Button>
            );
        });

        return(
            <div className='col-sm-3 col-md-2 col-lg-2 col-xs-12'>
                <ButtonToolbar>
                    <ButtonGroup>{items}</ButtonGroup>
                </ButtonToolbar>
            </div>
        )

    }
}

LotOfProducts.propTypes = {
    lotProductsItems: PropTypes.array.isRequired,
    lotProductsActive: PropTypes.number.isRequired,
    setLotProducts: PropTypes.func.isRequired
};

