import React, { useState } from 'react'
import Body from '../componets/Body'
import CardProduct from '../componets/cardproduct'
import Navi from '../componets/navigationbar'
import TabBar from '../componets/TabBar'
import Layout from './Layout'
import Footer from '../componets/footer'
import Services from '../componets/Services'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Fetchproduct } from '../Service/Action/GetBookAction'
import SkeletonProduct from '../componets/SkeletonCard'
import secureLocalStorage from 'react-secure-storage'
export function Homepage(props) {

  const [isback,SetBack] = useState(true);
  const [isLoading, SetLoading] = useState(false)

  const [userAuth,setUserAuth] =useState({
    access_token: ""
   
})
  useEffect(()=>{
      SetLoading(true)
      userAuth.access_token = secureLocalStorage.getItem('authlogin');
      setTimeout(()=>{
   
        props.Fetchproduct()
 
        setProduct(props.product)
        SetLoading(false)

      },1000)
  
 
      console.log("use effect render")
      console.log(userAuth.access_token)
   
      
    
  },[])


  const [pro,setProduct] = useState([])


  return (
    <>
    {/* {console.log(props.product)} */}
    {/* {console.log(pro)} */}
    {/* {console.log(isLoading)} */}
    
      <Navi />
  
      <Body />
      <Services />



      {
        userAuth.access_token &&  
        
        <div className='container'>
                <TabBar />
        <div className='row g-3'>
          {
             isLoading && <SkeletonProduct /> 
           
          }


       { pro && props.product.map(product =>(

            
      <CardProduct products={product} key={product.id}/>

              

    ))}


       </div>

      </div>
      }
  
    
      {/* <Footer>
      </Footer> */}

    </>
  )
}
const mtp =(store) =>{
  return {
        product:store.productreducer.products
  }
}


export default connect(mtp,{Fetchproduct})(Homepage)
