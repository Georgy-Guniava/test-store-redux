const initialState = {
    allProducts: [],
    products: [],
    productsList: [],
    active: NaN,
    activeProduct: {"name": "Redmi 4 Pro",
                    "description": "a powerful and not expensive smartphone",
                    "rating": 4.5,
                    "price": 13000,
                    "img": "img.jpg",
                    "highlightedName":"Redmi 4 Pro",
                    "highlightedDescription":"a powerful and not expensive smartphone"},
    lgShow: false,
    lotProductsItems:[4, 8, 16],
    lotProductsActive:NaN,
    dropDownItems: [{
        id: 'name',
        active: false,
        label: 'Name'
    }, {
        id: 'price',
        active: false,
        label: 'Price ascending'
    }, {
        id: 'priceDes',
        active: false,
        label: 'Price descending'
    }, {
        id: 'rating',
        active: false,
        label: 'Rating ascending'
    }, {
        id: 'ratingDes',
        active: false,
        label: 'Rating descending'
    }]

};

export default function productList(state = initialState, action) {
    switch (action.type) {
        case 'LOADING_FIRST_DATA':

            return { ...state, allProducts: action.payload.products,
                               products: action.payload.products,
                               productsList: action.payload.List,
                               activeProduct: action.payload.List[0],
                               active: 1,
                               lotProductsActive: 4};

        case 'SET_ACTIVE_PAGE_NUMBER':

            let newProductList = [];
            state.products.forEach((product,i) => {

                if (i+1 > (action.payload - 1) * state.lotProductsActive &&
                    i+1 <= action.payload * state.lotProductsActive) {
                    newProductList.push(product);
                }
            });
            return { ...state, productsList: newProductList, active: action.payload };

        case 'SEARCH_PRODUCTS':

            let foundProduct=[];
            let newFoundProduct=[];
            state.allProducts.forEach((product,i) => {
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

                if (i+1 > (state.active - 1) * state.lotProductsActive &&
                    i+1 <= state.active * state.lotProductsActive) {
                    newFoundProduct.push(product);
                }
            });

            return { ...state, products: foundProduct, productsList: newFoundProduct };

        case 'TYPE_OF_FILTRATION':
            let filterProduct = state.products;
            let newFilterProducts = [];
            let newDropDownItems = [];
            let type = action.payload.replace('Des','');

            state.dropDownItems.forEach(element => {
                element.active = element.id === action.payload;
                newDropDownItems.push(element);
            });

            filterProduct.sort((a,b) => {
                if (a[type] === b[type]) return 0;
                return a[type] > b[type] ? 1 : -1;
            });
            if(action.payload.match('Des', 'i')) filterProduct.reverse();


            filterProduct.forEach((product,i) => {

                if (i+1 > (state.active - 1) * state.lotProductsActive &&
                    i+1 <= state.active * state.lotProductsActive) {
                    newFilterProducts.push(product);
                }
            });
            return { ...state, products: filterProduct,
                               productsList: newFilterProducts,
                               dropDownItems: newDropDownItems};


        case 'SHOW_MODAL':

            return { ...state, activeProduct: state.productsList[action.payload], lgShow: true};

        case 'CLOSE_MODAL':

            return { ...state, lgShow: false};

        case 'SET_LOT_PRODUCTS':

            let newLotProductList = [];
            state.products.forEach((product,i) => {
                if (i+1 > (1 - 1) * action.payload &&
                    i+1 <= 1 * action.payload) {
                    newLotProductList.push(product);
                }
            });

            return { ...state, lotProductsActive: action.payload, productsList: newLotProductList, active: 1};

        default:
            return {...state}
    }
}