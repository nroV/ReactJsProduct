
import { Header, Product_Url } from "../Constant/Api"
export const FetchID = async (pid)=>{
   const response = await fetch(`${Product_Url}${pid}`,{
                method:"GET",
                headers:Header
            })
            return response;
    
}