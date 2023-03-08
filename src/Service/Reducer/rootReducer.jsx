import { combineReducers } from "redux";
import { ProductReducer } from "./productReducer";
import { UseAuthorization } from "./AuthUser";
export const rootReducer = combineReducers({
    productreducer:ProductReducer,
    filter:ProductReducer,
    productid:ProductReducer,
    postproduct:ProductReducer,
    categoryreducer :ProductReducer,
    uploadimagereducer:ProductReducer,
    putresponse:ProductReducer,
    authlogin:UseAuthorization
})
