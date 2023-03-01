

import secureLocalStorage from "react-secure-storage"
import { HeaderRegister } from "../../Constant/Api"
import { ActionTypes } from "../ActioType"

export const LoginUser =  (user)=> async (dispatch) =>{
 return fetch(`https://api.escuelajs.co/api/v1/auth/login`,{
    method:"POST",
    headers: HeaderRegister,
    body:JSON.stringify(user)
  
}).then(res=>res.json())
.then(
 
    res =>{
             console.log(res)
 
             dispatch({
              type:ActionTypes.LoginUsers  , 
              payload:res
        
    }   

    ) 
    if(res.refresh_token){
        secureLocalStorage.setItem('authlogin',res.access_token);
        return res;
    }
     

    return Promise.resolve();
 
}

)
.catch(err=>console.log(err))
        

}

