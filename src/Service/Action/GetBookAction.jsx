import { ActionTypes } from "./ActioType"
import { Header, Product_Url } from "../Constant/Api"
export const Fetchproduct = (cid)=>{

         return (dispatch) =>{
                fetch(`${Product_Url}?categoryId=${cid}`,{
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