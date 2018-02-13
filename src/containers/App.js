import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Paginate from '../components/Pagination';
import {bindActionCreators} from 'redux';
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
import {loadingFirstData} from '../actions/LoadingFirstData';
import PropTypes from 'prop-types';
import LotOfProducts from '../components/LotOfProducts';
import * as lotOfProductsActions from '../actions/LotOfProductsActions';

class App extends Component {

  async componentWillMount() {

    let promise = new Promise((resolve) => {
      async function getProducts() {
        const response = await fetch('http://localhost:3001/products');
        const {products} = await response.json();
        resolve(products)
      }

      getProducts();
    });
    promise
      .then(result => (this.props.loadingFirstData(result)))

    // function test() {
    //   return new Promise((res, rej) => {
    //     http.get(url, {}, function (s) {
    //       res(s)
    //     }, function (e) {
    //       rej(e)
    //     })
    //   });
    //
    // }
    // var te = await test()

  }


  render() {
    const {productList} = this.props;
    const {setActivePageNumber} = this.props.paginationActions;
    const {onSearch} = this.props.searchActions;
    const {typeOfFiltration} = this.props.dropdownSortButtonActions;
    const {showModal} = this.props.modalActions;
    const {modalclose} = this.props.modalCloseActions;
    const {setLotProducts} = this.props.lotOfProductsActions;

    return <div>
      <Header/>
      <div className="container">
        <div className="row">
          <SearchBar onSearch={onSearch}/>
          <DropdownSortButton dropDownItems={productList.dropDownItems} typeOfFiltration={typeOfFiltration}/>
          <LotOfProducts lotProductsActive={productList.lotProductsActive}
                         lotProductsItems={productList.lotProductsItems}
                         setLotProducts={setLotProducts}/>
        </div>
        <MyLargeModal show={productList.lgShow} onClick={modalclose} activeproduct={productList.activeProduct}/>
        <div id="showProducts" className="row">
          <ProductList products={productList.productsList} showModal={showModal}/>
        </div>
        <Paginate products={productList.products}
                  active={productList.active}
                  lotProductsActive={productList.lotProductsActive}
                  setActivePageNumber={setActivePageNumber}/>
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
    paginationActions        : bindActionCreators(paginationActions, dispatch),
    searchActions            : bindActionCreators(searchActions, dispatch),
    dropdownSortButtonActions: bindActionCreators(dropdownSortButtonActions, dispatch),
    modalActions             : bindActionCreators(modalActions, dispatch),
    modalCloseActions        : bindActionCreators(modalCloseActions, dispatch),
    loadingFirstData         : bindActionCreators(loadingFirstData, dispatch),
    lotOfProductsActions     : bindActionCreators(lotOfProductsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)