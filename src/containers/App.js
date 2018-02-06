import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from "../components/Header";
import ProductList from "../components/ProductList";
// import { bindActionCreators } from 'redux'
// import User from '../components/User'
// import Page from '../components/Page'
// import * as pageActions from '../actions/PageActions'

class App extends Component {
    render() {
        // const { productList } = this.props;
        console.log('@@@@@@@@@@@@@@@@2', this.props.products, this.state )
        // const { user, page } = this.props
        // const { getPhotos } = this.props.pageActions

        return <div className='row'>
            <Header/>
            {/*<ProductList products={productList.products} />*/}
            {/*<User name={user.name} />*/}
            {/*<Page photos={page.photos} year={page.year} getPhotos={getPhotos} fetching={page.fetching}/>*/}
        </div>
    }
}

function mapStateToProps(state) {
    console.log('@@@@@@@@@@@@@@@@2', state)
    return {
        products: state.productList.products
        // user: state.user,
        // page: state.page
    }
}
//
// function mapDispatchToProps(dispatch) {
//     return {
//         pageActions: bindActionCreators(pageActions, dispatch)
//     }
// }

export default connect(mapStateToProps)(App)