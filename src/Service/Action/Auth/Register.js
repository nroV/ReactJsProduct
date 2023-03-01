import { Main_url, HeaderRegister,Header } from "../../Constant/Api"

export const RegisterNew = async (user) =>{
    const response = await fetch(
            `${Main_url}users/`,
            {
                method:"POST",
                headers:Header,
                body:JSON.stringify(user)
          
            }
            
      
    )
    return response;
}