import { ActionTypes } from "../Action/ActioType";

const intialstate = {
        products: [],
        category: [],
        pproduct: {},
        imgresponse: {},
        deleteresponse:{},
        updateresponse : {}
}
export const ProductReducer = (state = intialstate, action) => {
        switch (action.type) {
                case ActionTypes.fetch_product:
                        return {
                                ...state,
                                products: action.payload
                        }
                case ActionTypes.fetch_id:
                        return {
                                ...state,
                                products: action.payload
                        }
                case ActionTypes.Post_product:
                        return {
                                ...state,
                                pproduct: action.payload
                        }
                case ActionTypes.fetch_category:
                        return {
                                ...state,
                                category: action.payload
                        }
                case ActionTypes.img_upload:
                        return {
                                ...state,
                                imgresponse: action.payload
                        }
                case ActionTypes.deleteproduct:
                        return {
                                ...state,
                                deleteresponse: action.payload
                        }
                case ActionTypes.UpdateProduct:
                        return{
                                ...state,
                                updateresponse:action.payload
                        }
                default:
                        return state;

        }
}