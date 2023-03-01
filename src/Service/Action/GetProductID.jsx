import { Header, Main_url, Product_Url } from "../Constant/Api"
import { ActionTypes } from "./ActioType"



export const FetchProductID = (pid)=>{
    return (dispatch) =>{
            fetch(`${Product_Url}${pid}`,{
                method:"GET",
                headers:Header
            }).then(res => res.json())
            .then(res => dispatch({
                        type:ActionTypes.fetch_id,
                        payload:res
            }))
            .catch(err => console.log(err))

    }
}





export const FetchProductIDTwo = (pid)=>  async (dispatch) =>{
    return fetch(`${Product_Url}${pid}`,{
                method:"GET"
                // headers:Header
            }).then(res => res.json())
            .then(res => {
                console.log(res)
                dispatch({
                    type:ActionTypes.fetch_id,
                    payload:res
                })

                return res;
            })
            .catch(err => console.log(err))

    
}