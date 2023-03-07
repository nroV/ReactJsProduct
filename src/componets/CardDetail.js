import React, { useEffect, useState,  } from 'react'
import { connect, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { DeleteProduct } from '../Service/Action/DeleteProduct';
import { FetchProductID } from '../Service/Action/GetProductID';
import Navi from './navigationbar';
import SecondNavi from './SecondNavi';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
export function CardDetail(props) {
    const {id} = useParams('id')
 
    const [index,setIndex] = useState(0)

    const [isImg,setImg] = useState({
  
    })
    const onCart = ()=>{
        setCounter(counter+1)
    }
    const navigator = useNavigate()
    const dispatch = useDispatch()
    useEffect(()=>{
     
      
           props.FetchProductID(id)
    
          setImg(images)
      
    },[])
    const {title,description,category,images,price} = props.pid
 
    const HandleDelete = ()=>{
            dispatch(DeleteProduct(id))
            alert('your item has been deleted')
            navigator('/')
    }

    const [counter, setCounter] = useState(0);
    return (
        
        <div className='container my-5'>   
        <SecondNavi cartcounter={counter} />
                {/* {console.log(props.pid)} */}
                {    console.log("counter",counter)}
          
            <div className="row justify-content-center align-items-center my-5">
            <div className="col-12 col-lg-6">
                {images &&     <img  
                            src={
                                images[index]
                            
                            
                            } 
                       
                            className='img-fluid' alt='img-left'>
                            </img>}
                    <div className="row my-5">


                        <div className="col">

                        {images &&     <img  
                            src={
                                images[1]
                            
                            
                            } 
                            onClick={()=>setIndex(1)}
                            className='img-fluid' alt='img-left'>
                            </img>}
                         
                        </div>

                        <div className="col">
                        {images &&     <img  
                            src={
                                images[2]
                            
                            
                            } 

                        
                            onClick={()=>setIndex(2)}
                            className='img-fluid' alt='img-left'>
                            </img>}
                        </div>


                        <div className="col">
                        {images &&     <img  
                            src={
                                images[0]
                            
                            
                            } 
                            onClick={()=>setIndex(0)}
                            className='img-fluid' alt='img-left'>
                            </img>}
                        </div>
                    </div>

            </div> 
             

                <div className="col-12 col-lg-6">
                    <div className='card-left'>
                        <p className='title display-5 fw-bold'>{title}</p>
                        <p className="category">Category <span className=' fw-bold' style={{
                            color:"#eb5e28"
                        }}>
                        
                        
                        </span>
                        
                      
                       
                       
                        </p>

                        <div className="button-group-now d-flex">
                           <Link to={`/update/${id}`}> <button className='btn btn-outline-success fw-bold'
                            
                            
                            >Edit</button></Link>
                            <button className='btn btn-outline-danger fw-bold' style={{
                                marginLeft:"15px"
                            }}
                             onClick={HandleDelete}
                            
                            
                            >Delete</button>
                        </div>


                        <div className="pricedetail d-flex align-items-center">

                            <div className='content p-0 d-flex align-self-center' style={{
                                marginRight:"25px",

                         
                                color:"black",
                             
                             
                              
                            }}>

                                <p className='fw-bold align-self-center'
                                    style={{
                                        fontSize:"3em",
                                        color:"#adb5bd"
                                   
                             
                                  
                                    }}
                                >
                                    <span style={{
                                        fontSize:"30px",
                                        position:"relative",
                                        top:"-15px",
                                        color:"#adb5bd"
                                  
                                    }}>$</span>  
                                    
                                    {price}</p>
                            
                            </div>

                            <div className='content'>

                                <p style={{
                                        color:"#20bf55"
                                }} className='fw-bold'>Save <span style={{
                                    color:"#20bf55"
                                }}>
                                    %25
                                    </span></p>
                                <p style={{
                                           color:"#ffffff",
                                }}>Inclusive of all taxes</p>
                            </div>
                        </div>
                        <div className='description'>
                            <p style={{
                                color:"#bfc0c0",
                                fontWeight:"100"
                            }}> {description}</p>
                        </div>

                        <div className='bottom d-flex align-items-center '>
                        <button className='btn fw-bold display-2 rounded pl-5' style={{
                                backgroundColor:"#f8f9fa",
                      
                            }}><span style={{
                            
                            }}>+</span></button>
                            <button className="cart bg-success fw-100 text-center p-2 rounded text-white border-0" style={{
                                margin:"0px 15px"
                            }} onClick={onCart}> Add to Card</button>
                            <button className='btn fw-bold display-2 rounded' style={{
                                backgroundColor:"#f8f9fa",
                      
                            }}><span style={{
                            
                            }}>-</span></button>
                        </div>

                    </div>


                </div>
            </div>


        </div>
    )
}
const mtp = (store) =>{
    return{
            pid:store.productid.products
    }
}

export default connect(mtp,{FetchProductID})(CardDetail)
