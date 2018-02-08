import React, {Component} from "react";
import {DropdownButton, MenuItem} from 'react-bootstrap';
import PropTypes from 'prop-types';


const title = "default";
const i = 1;


export default class DropdownSortButton extends Component {
    constructor(props) {
        super(props);
        this.onSelect = this.onSelect.bind(this);
    }

    onSelect(e) {
        this.props.typeOfFiltration(e.target.id);
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
                                                         value={item.id}
                                                         onClick={this.onSelect} >
                        {item.label}
                    </MenuItem>)}

                </DropdownButton>
            </div>
        );
    }
}

DropdownSortButton.propTypes = {
    dropDownItems: PropTypes.array.isRequired,
    typeOfFiltration: PropTypes.func.isRequired
};
