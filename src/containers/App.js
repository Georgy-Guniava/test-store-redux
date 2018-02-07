import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import Paginate from '../components/Pagination';
import { bindActionCreators } from 'redux';
import * as paginationActions from '../actions/PaginationActions';
import SearchBar from '../components/SearchBar';
import * as searchActions from '../actions/SearchActions';
import DropdownSortButton from '../components/DropdownButton';
import * as dropdownSortButtonActions from '../actions/DropdownSortButtonActions';

class App extends Component {
    render() {
        const { productList } = this.props;
        const { setActivePageNumber } = this.props.paginationActions;
        const { onSearch } =  this.props.searchActions;
        const { typeOfFiltration } =  this.props.dropdownSortButtonActions;

        return <div >
            <Header/>
                <div className="container">
                    <div className="row">
                        <SearchBar onSearch={onSearch}/>
                        <DropdownSortButton dropDownItems={productList.dropDownItems} typeOfFiltration={typeOfFiltration}/>
                    </div>
                    <div className="row">
                        <ProductList products={productList.productsList} />
                    </div>
                    <Paginate products={productList.products} active={productList.active} setActivePageNumber={setActivePageNumber}  />
                </div>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        productList: state.productList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        paginationActions: bindActionCreators(paginationActions, dispatch),
        searchActions: bindActionCreators(searchActions, dispatch),
        dropdownSortButtonActions: bindActionCreators(dropdownSortButtonActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)