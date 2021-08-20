import { GETPRODUCTDETAIL, GETPRODUCTLIST } from "./action";

const initialState = {
    productsList: [],
    productDetail: {},
    isProductsLoading: true,
    isProductDetailLoading: true
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETPRODUCTLIST:
            return { ...state, productsList: action.payload, isProductsLoading: false }
        case GETPRODUCTDETAIL:
            return { ...state, productDetail: action.payload, isProductDetailLoading: false }
        default:
            return { ...state }
    }
}

