import { ActionTypes } from "./ActioType"
import { Header, Product_Url, HeaderImg } from "../Constant/Api"
import axios from 'axios';
export const Uploadimg =  async (image)=>{

      const response = await axios("https://api.escuelajs.co/api/v1/files/upload",{
                method:"POST",
                headers: HeaderImg,
                data:image
            })
    return response;
}


// export const Uploadimg =  (image)=> async (dispatch) =>{

//     return (dispatch) =>{
//         axios("https://api.escuelajs.co/api/v1/files/upload",{
//                 method:"POST",
//                 headers: HeaderImg,
//                 data:JSON.stringify(image)
//             }).then(res=>{
//                 console.log(res)
//                 dispatch({
//                     type: ActionTypes.img_upload,
//                     payload:res
//         })  
//                     return Promise.resolve()
//             }
//             )
//             .catch(err=>console.log(err))
//     }
// }