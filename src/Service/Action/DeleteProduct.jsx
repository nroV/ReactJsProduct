import { Header, Product_Url } from "../Constant/Api"
import { ActionTypes } from "./ActioType"

export const DeleteProduct =  (id)=> async (dispatch) =>{
 return fetch(`${Product_Url}${id}`,{
    method:"DELETE",
    headers:Header,
  
}).then(res=>res.json())
.then(
    res =>{
             console.log(res)
             dispatch({
        type:ActionTypes.deleteproduct,
        payload:res
    }) 
    return Promise.resolve();
 
}

)
.catch(err=>console.log(err))
        

}