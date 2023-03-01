

import { ActionTypes } from "./ActioType"
import { Header, Category_URL } from "../Constant/Api"
// export const Fetchcategory =  ()=>{

//         return (dispatch) =>{
//                 fetch("https://api.escuelajs.co/api/v1/categories",{
//                         method:"GET",
//                         headers:Header
            
//                 }).then(res=>res.json())
//                 .then(res=>dispatch({
//                             type:ActionTypes.fetch_category,
//                             payload:res
//                 }))
//                 .catch(err=>console.log(err))
//         }
// }

export const Fetchcategory =  async ()=>{

     const response = await fetch("https://api.escuelajs.co/api/v1/categories",{
                        method:"GET",
                        headers:Header
            
                })

        return response;
}