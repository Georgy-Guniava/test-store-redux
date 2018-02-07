import React, {Component} from "react";
import {DropdownButton, MenuItem} from 'react-bootstrap';
import PropTypes from 'prop-types';


const title = "default";
const i = 1;


export default class DropdownSortButton extends Component {

    onSelect(e) {
        this.props.typeOfFiltration({ id:e.target.id, revers: e.target.revers});



    };

    render() {

        const { dropDownItems } = this.props;

        return (
            <div className='col-sm-1'>
                <DropdownButton
                    bsStyle={title.toLowerCase()}
                    title={"Filter"}
                    key={i}
                    id={`dropdown-basic-${i}`}
                >
                    {dropDownItems.map(item => <MenuItem key={item.id}
                                                         id={item.id}
                                                         active={item.active}
                                                         revers={item.revers}
                                                         value={item.id}
                                                         onClick={this.onSelect.bind(this)} >
                        {item.label}
                    </MenuItem>)}

                </DropdownButton>
            </div>
        );
    }
}

DropdownSortButton.propTypes = {
    dropDownItems: PropTypes.array.isRequired
    typeOfFiltration: PropTypes.func.isRequired
};
