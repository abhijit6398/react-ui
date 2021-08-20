export const GETPRODUCTLIST = "GETPRODUCTLIST"
export const GETPRODUCTDETAIL = "GETPRODUCTDETAIL"

export const dispatchProductList = (data) => dispatch => {
    return dispatch({
        type: GETPRODUCTLIST,
        payload: data
    })
}

export const dispatchProductDetail = (data) => dispatch => {
    return dispatch({
        type: GETPRODUCTDETAIL,
        payload: data
    })
}