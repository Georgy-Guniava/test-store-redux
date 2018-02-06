import {products} from '../product.json'

const initialState = {
    products: products
        // [{
        // "name": "Redmi 4 Pro",
        // "description": "a powerful and not expensive smartphone",
        // "rating": 4.5,
        // "price": 13000,
        // "img": "img.jpg"
        // },
        // {
        // "name": "NOKIA 3310",
        // "description": "A legendary phone that can not be destroyed",
        // "rating": 5,
        // "price": 3310,
        // "img": "img.jpg"
        // },
        // {
        // "name": "NOKIA 6303",
        // "description": "A legendary phone that can not be destroyed",
        // "rating": 4.5,
        // "price": 4000,
        // "img": "img.jpg"
        // },
        // {
        // "name": "Nexus 4",
        // "description": "a powerful and not expensive smartphone",
        // "rating": 4.5,
        // "price": 16000,
        // "img": "img.jpg"
        // }]
};

export default function productList(state = initialState) {
    return {...state}
}