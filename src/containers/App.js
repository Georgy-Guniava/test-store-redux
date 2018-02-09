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
import MyLargeModal from '../components/MyLargeModal';
import * as dropdownSortButtonActions from '../actions/DropdownSortButtonActions';
import * as modalActions from '../actions/ModalActions';
import * as modalCloseActions from '../actions/ModalCloseActions';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer} from 'react-notifications';
import { loadingFirstData } from '../actions/LoadingFirstData';
import PropTypes from 'prop-types';

class App extends Component {


    componentWillMount() {

        let promise = new Promise((resolve) => {
            async function getProducts () {
                const response = await fetch('http://localhost:3001/products');
                const { products } = await response.json();
                resolve (products)
            }
            getProducts ();
        });
        promise
            .then(result => (this.props.loadingFirstData(result)))
    }


    render() {
        const { productList } = this.props;
        const { setActivePageNumber } = this.props.paginationActions;
        const { onSearch } =  this.props.searchActions;
        const { typeOfFiltration } =  this.props.dropdownSortButtonActions;
        const { showModal } =  this.props.modalActions;
        const { modalClose } =  this.props.modalCloseActions;



        return <div >
            <Header/>
            <div className="container">
                <div className="row">
                    <SearchBar onSearch={onSearch}/>
                    <DropdownSortButton dropDownItems={productList.dropDownItems} typeOfFiltration={typeOfFiltration}/>
                </div>
                <MyLargeModal show={productList.lgShow} modalClose={modalClose} activeProduct={productList.activeProduct} />
                <div id="showProducts" className="row">
                    <ProductList products={productList.productsList} showModal={showModal}/>
                </div>
                <Paginate products={productList.products} active={productList.active} setActivePageNumber={setActivePageNumber}  />
            </div>
            <NotificationContainer/>
        </div>
    }
}

App.propTypes = {
    loadingFirstData: PropTypes.func.isRequired
};


function mapStateToProps(state) {
    return {
        productList: state.productList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        paginationActions: bindActionCreators(paginationActions, dispatch),
        searchActions: bindActionCreators(searchActions, dispatch),
        dropdownSortButtonActions: bindActionCreators(dropdownSortButtonActions, dispatch),
        modalActions:bindActionCreators(modalActions, dispatch),
        modalCloseActions:bindActionCreators(modalCloseActions, dispatch),
        loadingFirstData:bindActionCreators(loadingFirstData, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)