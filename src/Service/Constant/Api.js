import secureLocalStorage from "react-secure-storage";

export const Main_url ="https://api.escuelajs.co/api/v1/";

export const Product_Url =  `${Main_url}products/`;


export const Category_URL ='https://api.escuelajs.co/api/v1/categories';
export const Header ={
        'Authorization' :secureLocalStorage.getItem('authlogin'),
        "Accept" :"application/json",
        "Content-Type": "application/json",
}

export const HeaderImg ={
        // 'Authorization' :'',
    
        "Accept" :"application/json",
        "Content-Type": "multipart/form-data"

}

export const HeaderRegister ={
        "Accept" :"application/json",
        "Content-Type": "application/json",
        
     
}