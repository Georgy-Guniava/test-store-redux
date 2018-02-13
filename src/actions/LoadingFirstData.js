export function loadingFirstData(products) {

    const List = [];
    products.forEach((product, i) => {
        if (i <= 3) return List.push(product);
    });


    return {
        type: 'LOADING_FIRST_DATA',
        payload: {products: products, List: List}

    }
}