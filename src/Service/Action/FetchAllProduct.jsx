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
export const FilterProduct = (minprice,maxprice)=>{

    return (dispatch) =>{
           fetch(`${Product_Url}?price_min=${minprice}&price_max=${maxprice}`,{
               method:"GET",
               headers:Header
           }).then(res=>res.json())
           .then(res=>dispatch({
                       type: ActionTypes.filter_product,
                       payload:res
           }))
           .catch(err=>console.log(err))
   }

}

export const Filter =  async (minprice,maxprice)=> {

    const response = await fetch(`${Product_Url}?price_min=${minprice}&price_max=${maxprice}`,{
        method:"GET",
        headers:Header
    });
    return response;

}