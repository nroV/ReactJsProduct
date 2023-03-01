import { Header, Product_Url } from "../Constant/Api"
import { ActionTypes } from "./ActioType"
import { useNavigate } from "react-router-dom"


export const PutProduct =  (data,id)=> async (dispatch) => {

 return await fetch(`${Product_Url}${id}`,{
        method:"PUT",
        headers:Header,
        body:JSON.stringify(data)
      
    }).then(res=>res.json())
    .then(res =>{
        console.log("response updated",res)
        dispatch({
            type:ActionTypes.UpdateProduct,
            payload:res
        })
        if(res.id !==null){

                return res;
        }
        else{
            alert('Something missing in your info')
        }
        return Promise.resolve()
    }
        ).catch(err=>console.log(err))
 
        

}