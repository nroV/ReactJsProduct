import { ActionTypes } from "./ActioType"
import { Header, Product_Url } from "../Constant/Api"
export const Fetchproduct = ()=>{

         return (dispatch) =>{
                fetch(Product_Url,{
                    method:"GET",
                    headers:Header
                }).then(res=>res.json())
                .then(res=>dispatch({
                            type: ActionTypes.fetch_product,
                            payload:res
                }))
                .catch(err=>console.log(err))
        }
}