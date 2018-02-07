import {products} from '../product.json'

let productList=[];
products.forEach((product,i) => {
    if(i <= 3) return productList.push(product);
});


const initialState = {
    products: products,
    productsList: productList,
    active: 1,
    dropDownItems: [{
        id: 'name',
        active: false,
        label: 'Name',
        revers: false
    }, {
        id: 'price',
        active: false,
        label: 'Price ascending',
        revers: false
    }, {
        id: 'priceDes',
        active: false,
        label: 'Price descending',
        revers: true
    }, {
        id: 'rating',
        active: false,
        label: 'Rating ascending',
        revers: false
    }, {
        id: 'ratingDes',
        active: false,
        label: 'Rating descending',
        revers: true
    }]

};

export default function productList(state = initialState, action) {
    switch (action.type) {
        case 'SET_ACTIVE_PAGE_NUMBER':

            let newProductList = [];
            state.products.forEach((product,i) => {

                if (i+1 > (action.payload - 1) * 4 && i+1 <= action.payload * 4) {
                    newProductList.push(product);
                }
            });
            return { ...state, productsList: newProductList, active: action.payload };

        case 'SEARCH_PRODUCTS':

            let foundProduct=[];
            let newFoundProduct=[];
            products.forEach((product,i) => {
                if(action.payload === '') {
                    product.highlightedName = product.name;
                    product.highlightedDescription = product.description;
                    return foundProduct.push(product)
                }
                let searchText = action.payload;
                if (product.name.match(new RegExp(searchText, 'i')) ||
                    product.description.match(new RegExp(searchText, 'i'))) {
                    product.highlightedName = product.name.replace(new RegExp(searchText, 'gi'), '<b>$&</b>');
                    product.highlightedDescription = product.description.replace(new RegExp(searchText, 'gi'), '<b>$&</b>');
                    return foundProduct.push(product);
                }
            });
            foundProduct.forEach((product,i) => {

                if (i+1 > (state.active - 1) * 4 && i+1 <= state.active * 4) {
                    newFoundProduct.push(product);
                }
            });
            return { ...state, products: foundProduct, productsList: newFoundProduct };

        case 'TYPE_OF_FILTRATION':
            let filterProduct = state.products;
            let newFilterProducts = [];
            let newDropDownItems = [];

            state.dropDownItems.forEach(element => {
                element.active = element.id === action.payload.id;
                newDropDownItems.push(element);
            });

            filterProduct.sort((a,b) => {
                if (a[action.payload.replacer()] === b[type]) return 0;
                return a[type] > b[type] ? 1 : -1;
            })






            filterProduct.forEach((product,i) => {

                if (i+1 > (state.active - 1) * 4 && i+1 <= state.active * 4) {
                    newFilterProducts.push(product);
                }
            });
            return { ...state, products: filterProduct, productsList: newFilterProducts, dropDownItems: newDropDownItems};


        default:
            return {...state}
    }
}