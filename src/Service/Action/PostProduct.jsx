import { Header, Product_Url } from "../Constant/Api"
import { ActionTypes } from "./ActioType"

export const AddProduct =  (data)=> async (dispatch) =>{
 return fetch(`${Product_Url}`,{
    method:"POST",
    headers:Header,
    body:JSON.stringify(data)
  
}).then(res=>res.json())
.then(
    res =>{
             console.log(res)
             dispatch({
        type:ActionTypes.Post_product,
        payload:res
    }) 
    return Promise.resolve();
 
}

)
.catch(err=>console.log(err))
        

}