import { Main_url, HeaderRegister } from "../../Constant/Api"

export const SendEmail= async (email) =>{
    const response = await fetch(
            `${Main_url}users/is-available`,
            {
                method:"POST" ,
                headers: HeaderRegister,
                body:JSON.stringify(email)
            }
            
      
    )
    return response;
}